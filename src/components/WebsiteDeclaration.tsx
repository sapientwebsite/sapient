import { useEffect, useId, useState } from 'react';

const STORAGE_KEY = 'sapient-ifsc-declaration-ack';

const fontDisplay = '"Plus Jakarta Sans", sans-serif';
const fontBody = '"Satoshi", sans-serif';

type ResidencyChoice = 'not-restricted' | 'restricted' | null;

/**
 * Soft jurisdictional declaration for the Gift City / IFSC page.
 * No access gating — Continue dismisses for either choice.
 */
export default function WebsiteDeclaration() {
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<ResidencyChoice>(null);
  const groupId = useId();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === '1') return;
    } catch {
      /* ignore */
    }
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const canContinue = choice !== null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${groupId}-title`}
    >
      <div className="absolute inset-0 bg-[#17231E]/55 backdrop-blur-[2px]" />

      <div className="relative w-full sm:max-w-[640px] max-h-[92vh] overflow-y-auto rounded-t-[24px] sm:rounded-[24px] bg-[#FDFCF9] shadow-[0_24px_80px_rgba(23,35,30,0.28)]">
        <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-2">
            <p
              className="text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase text-[#5C6B4A]"
              style={{ fontFamily: fontBody }}
            >
              Gift City · IFSC
            </p>
            <h2
              id={`${groupId}-title`}
              className="text-[24px] sm:text-[32px] font-bold text-[#17231E] leading-[120%] tracking-[0.01em]"
              style={{ fontFamily: fontDisplay }}
            >
              Before you continue
            </h2>
          </div>

          <p
            className="text-[14px] sm:text-[15px] text-[#334155] leading-[165%]"
            style={{ fontFamily: fontBody }}
          >
            The information on this page relates to Sapient Wealth IFSC LLP and
            its fund management activities from GIFT City, IFSC. It is not
            directed at persons who are residents of the United States of
            America or Canada, or of any other jurisdiction where approaching
            investors for securities business — or using information of this
            kind — is restricted or requires local registration that we do not
            hold.
          </p>

          <fieldset className="flex flex-col gap-3 border-0 p-0 m-0">
            <legend className="sr-only">Confirm your residency status</legend>

            {(
              [
                {
                  value: 'not-restricted' as const,
                  label:
                    'I confirm that I am not a resident of the United States of America or Canada, and that I am not based in any jurisdiction whose laws prohibit soliciting securities business without local registration, or restrict the use of information on this page.',
                },
                {
                  value: 'restricted' as const,
                  label:
                    'I confirm that I am a resident of the United States of America or Canada, or of a jurisdiction whose laws prohibit soliciting securities business without local registration, or restrict the use of information on this page.',
                },
              ] as const
            ).map((opt) => {
              const selected = choice === opt.value;
              return (
                <label
                  key={opt.value}
                  className={`flex gap-3 sm:gap-4 cursor-pointer rounded-[16px] sm:rounded-[20px] border p-4 sm:p-5 transition-colors ${
                    selected
                      ? 'border-[#17231E] bg-[#E5EBD1]/55'
                      : 'border-[#17231E]/12 bg-white hover:border-[#17231E]/25'
                  }`}
                >
                  <span className="relative mt-0.5 shrink-0">
                    <input
                      type="radio"
                      name={`${groupId}-residency`}
                      value={opt.value}
                      checked={selected}
                      onChange={() => setChoice(opt.value)}
                      className="peer sr-only"
                    />
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                        selected
                          ? 'border-[#17231E] bg-[#17231E]'
                          : 'border-[#17231E]/35 bg-transparent'
                      }`}
                      aria-hidden
                    >
                      {selected ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#E5EBD1]" />
                      ) : null}
                    </span>
                  </span>
                  <span
                    className="text-[13px] sm:text-[14px] text-[#17231E] leading-[160%]"
                    style={{ fontFamily: fontBody }}
                  >
                    {opt.label}
                  </span>
                </label>
              );
            })}
          </fieldset>

          <p
            className="text-[12px] sm:text-[13px] text-[#475569] leading-[160%]"
            style={{ fontFamily: fontBody }}
          >
            If you access this page on the basis of an incorrect confirmation,
            you alone are responsible for any legal or financial consequences
            that follow. You also agree to hold harmless Sapient Wealth IFSC
            LLP, its schemes, trustee, sponsor (where applicable), officers,
            employees and directors against claims, losses, costs or expenses —
            including legal fees — arising from such a confirmation.
          </p>

          <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-3 sm:gap-4 pt-1">
            <button
              type="button"
              disabled={!canContinue}
              onClick={dismiss}
              className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-semibold transition-colors ${
                canContinue
                  ? 'bg-[#17231E] text-white hover:bg-[#0F172A]'
                  : 'bg-[#17231E]/20 text-[#17231E]/40 cursor-not-allowed'
              }`}
              style={{ fontFamily: fontBody }}
            >
              Continue
            </button>
            <p
              className="text-[12px] text-[#78716C]"
              style={{ fontFamily: fontBody }}
            >
              Please select one of the options above to proceed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
