import NavigationFramerComponent from '../framer/navigation';
import FooterFramerComponent from '../framer/footer';
import AboutUsHeroHeader from "../framer/about-us-hero-header";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden bg-[rgb(245,_242,_235)]">
      <NavigationFramerComponent.Responsive style={{ width: '100%' }} />

      <AboutUsHeroHeader.Responsive
        style={{ width: '100%' }}
        variants={{
          base: "FHfbjrVhs", // Phone
          md: "Meg2FnzgF", // Tablet
          lg: "Meg2FnzgF",
          xl: "v1pmf_oq6", // Desktop (full-bleed backgrounds)
        }}
      />

      <FooterFramerComponent.Responsive style={{ width: '100%' }} />
    </div>
  );
}
