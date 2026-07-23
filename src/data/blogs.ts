export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  source: string;
  image: string;
  paragraphs: (string | { type: 'header' | 'interview' | 'list'; content: string | string[]; speaker?: string })[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'millennials-save-money',
    title: 'A leading financial expert’s top advice on how millennials can save money',
    date: 'Apr 8, 2022',
    source: 'ELLE',
    image: '/EI8cQB4jcio0PcLD4eatk2RHHo.avif',
    paragraphs: [
      "If there’s one thing you notice about Roopa Venkatkrishnan, it is her ability to make you feel comfortable, even when the situation is stressful. This quality makes for an important asset in her line of work as one of Mumbai’s most successful and high profile financial advisors.",
      "Her sheer conviction in what she does helps her and her clients tide through the highs and lows of a volatile market. Dealing with people’s hard earned money can be a huge responsibility but Venkatkrishnan goes beyond just that; in the pursuit of helping her clients become better money managers, she often becomes a part of their family, their friend, guide and philosopher.",
      "ELLE chats with Venkatkrishnan on her journey so far and where she gets all her strength and confidence:",
      {
        type: 'interview',
        speaker: 'ELLE: What was your first job like?',
        content: 'Roopa Venkatkrishnan: I started very young at the age of 16. My father was the biggest influencer in my life and he has been the same for many others. He would write a letter of recommendation for people and they would get jobs; they would progress from scooter to car and then a house.'
      },
      "So, when I grew up and wanted to work, I thought he would write a letter for me as well. But when I went to him asking for one, he gave me the newspaper he was reading and said, “I have educated you and now you need to fend for yourself.” That became the biggest lesson of my life. The next day I looked up advertisements for odd jobs and ended up working at a petrol pump writing bills for INR 300 per month. That was my first job.",
      {
        type: 'interview',
        speaker: 'ELLE: How did this experience shape your life?',
        content: 'RV: Initially, I was quite angry with my father. I didn’t speak to him for almost two years because I felt let down. Later in life when I moved up the ladder, I realised what an important lesson that was. I learnt to be fearless, strong and have zero inhibitions.'
      },
      "Four years ago, I lost my only child when he was 22. And I was back at work within 15 days because each and every client of mine came to me and said, “We need you”.",
      {
        type: 'interview',
        speaker: 'ELLE: What kind of clients do you usually work with?',
        content: 'RV: I’ve got clients from the slums of Andheri to farmers in a village that’s more than five hours away to women who are looking to start their journey towards financial independence. I don’t have any barriers. My goal is to create HNIs (High Net Individuals) rather than manage HNI money.'
      },
      {
        type: 'interview',
        speaker: 'ELLE: You had once said that women make better money managers. What are some of the qualities that make women good with money?',
        content: 'RV: Women are better at managing money because they are stronger emotionally. They are stable and rational in their thinking; they expect stable returns. In most homes, women are often the primary budgetary managers and take decisions regarding major spends.'
      },
      "Every woman who gets married aspires for financial security not just for herself, but also her children and family. In the last five to six years, I have seen more and more women become independent and invest their own money without depending on their fathers or husbands for it.",
      {
        type: 'interview',
        speaker: 'ELLE: What’s your one piece of advice to young millennials on saving money?',
        content: 'RV: We’re taught about making money, but we are not taught about creating wealth. Anyone can earn money, but wealth creation requires dedicated efforts.'
      },
      "So firstly, start saving as early as possible—at least 20 percent of your income should be saved for future. And second, you don’t need large sums of money to create wealth. Even a little money, saved in a disciplined and systematic manner, can help create a hefty corpus for your retirement."
    ]
  },
  {
    slug: 'grow-old-and-wise',
    title: 'Grow Old & Wise, Invest for Your Life',
    date: 'Aug 18, 2021',
    source: 'Roopa Venkatkrishnan',
    image: '/WmutxYNfieb5IV4xaW6Kqr219aI.avif',
    paragraphs: [
      "‘Change is the only constant thing in life’ – this adage is very apt for today’s unpredictable future. Life as we know it has changed but has it changed for the better? This is one very pressing question that hovers around every ageing couple. Despite technology running every aspect of our life, seniors today are still looming in the dark when it comes to planning for their future.",
      "Going by several research reports, experts suggest that longevity of life has increased and people are expected to live beyond 85 years. Imagine a situation, wherein you live a long life but are unprepared financially, how would you survive? In today’s unconnected emotional world, life is even more complicated with information overdose, thereby further complicating one’s understanding. With this scenario, seniors today still hold on to more reliable investment options with less risk.",
      "The need of the hour today is a better and clear understanding to seniors about new investment options. This will certainly make them reconsider investing their hard-earned money. This is a very important life decision as investments are as much about emotions and decisions as per our needs, cash flows, and lifestyles. We need to realise that on our retirement journey when it comes to choosing a retirement plan, the options before us are limitless. We need to make the right choice and be prepared at any age. A financial plan is a road map to help people achieve their goals and this of course applies to their retirement years.",
      {
        type: 'header',
        content: 'The Right Investment Path'
      },
      "Going by previous sentiments, it is believed that we can live for up to 30 years and more post-retirement. Interestingly, women live longer than men. Keeping this scenario in consideration, we should realise that any investment returns should earn above inflation which is above 8 per cent to maintain our future lifestyle. It is also essential that our investments should have a yield to take care of ever-increasing costs as per the inflation rates. Looking at just the medical expenses, the inflation rate in India is around 11 per cent, meaning that a blood test costs Rs 2,500 today will cost Rs 11,961 after 15 years and Rs 20,000 after 20 years. The escalations are unimaginable. It is thus imperative to invest in diversified channels other than the regular Fixed Deposits or Post Office Schemes to beat future inflation.",
      "Recently, I interacted with a bunch of older adults on Evergreen Club, a lifestyle and wellness digital community platform, several pertinent and essential questions were raised on today’s investment planning. We need to understand that inflation is not about the pricing going up, it is the value of money that comes down. Seniors today must invest with a budget in mind. This budget can be gauged keeping in mind your needs and requirements. One also needs to factor in the risk analysis of today’s investment which can only be explained with the help of a qualified professional.",
      "Every senior individual needs to keep these basic facts in mind - having a million rupees is not a retirement plan. It is important to understand how do you invest and grow that million rupees for your future. A simple categorisation of your expenditures is the following:",
      "The Essential Bucket fulfils your daily routine needs, the Lifestyle Bucket catering to the fun aspects of life, and the Nest Egg Bucket catering to emergencies",
      {
        type: 'header',
        content: 'Prepare for the Future'
      },
      "It is essential for every senior citizen to make a will in their lifetime, irrespective of age, and have the right nomination, as times are changing and someone can contest a nomination. We need to understand that today banks will give deposits to the nominee unless it is not challenged. Making a will safeguards all your hard-earned assets. Get a CA or Lawyer to draft your will in the right language. Husband and wife should have separate identities and both can individually decide what to do with their money. For women, it is imperative that they take pictures of their jewellery and mention behind the photos – the weight of gold, the number of diamonds, how many rubies, etc.",
      "If one does not need an income, invest in a growth option to receive cash flow. We need to understand that while investing in any equity, will give you long-term growth, but in between, there will be volatility. Don't expect immediate returns wherein you make your investments today and expect quick returns - that will not happen. In equities, the returns are either front-ended, back-ended, or in the middle during 7-8 years. Clearly understand how a particular asset class works to set expectations on yielding returns.",
      "Finally, it is very important to understand the difference between creating money versus creating wealth. For a simple understanding, if you invest Rs 100 in a regular saving scheme, with interest it becomes Rs 110 in a fixed tenure period - this is the classic way of increasing your money. However, taking today’s equity investment scenario – If you invest Rs 100, this can grow and compound to either Rs 8000 or Rs 10,000 in 20-25 years – the risks are higher in a short period but in long term the dividends are exponential. Thus, it is essential to take on the services of a financial advisor / Mutual Fund Distributor who will guide you in your investments’ thus handholding you, ensuring a smooth and substantial journey of wealth creation."
    ]
  },
  {
    slug: 'proposed-regulations-ignores-ground-realities',
    title: 'Proposed regulations ignores ground realities',
    date: 'Aug 22, 2017',
    source: 'Business Today',
    image: '/BRX0f8db4Q9BoSKp4am2Qlj8c1M.avif',
    paragraphs: [
      "The mutual fund industry is close to garner Rs 20 trillion of Asset Under Management (AUM) but the distributor community is grappling with the new proposed rules laid by the market regulator the Securities Exchange Board of India (Sebi) that is even challenging their existence. Speaking to Business Today's Mahesh Nayak, Dhruv Mehta chairman of Foundation of Independent Financial Advisors (FIFA), a body of financial advisors and distributors talks about the concerns of the financial advisors and the important role they play in garnering retail money and therefore why they want regulator to allow a dual role of advisory as well as execution for the independent financial advisors (IFA).",
      {
        type: 'interview',
        speaker: 'BT: Why are you against the regulator - Sebi\'s view of becoming a registered investment advisor (RIA)? Please elaborate?',
        content: "Mehta: Sebi introduced the Regulations for Investment Advisers in 2013. We welcome the move to regulate the investment advisory profession and we have nothing against the regulator. Our chief two reasons for not registering as RIAs and not supporting Sebi's Consultation Paper on Amendments/Clarifications to the Sebi (Investment Advisers) Regulations, 2013 are:"
      },
      "Exemptions were given in the IA regulations to persons giving advice but registered under other regulations Mutual Fund Distribution, PMS regulations, Broking, other regulators IRDA, PFRDA.",
      "These advisors have not registered as RIAs because SEBI regulations for an RIA",
      "1) Bans a RIA from receiving Commission\n2) The segregation of the role of Advise and Execution",
      "These current and proposed regulations ignore the ground realities and the way the advice profession has been structured in globally and in India. The investment advisory profession is predominantly a comprehensive service of advice and execution. Execution would include purchase of the appropriate products. It also requires an ongoing service. Currently most advisors are paid by the investors through embedded commissions rather than paying fees separately.",
      "An investor, and so does the advisor, needs to have the freedom to ask for / or offer a service which is either\na)\t Fee Based or Commission Based\nb)\t Only advise or both Advise and Execution",
      "In this context introduction of the Investment Regulations are welcome as it introduces a regulated Fee Based advisory service. However, the regulations have restricted the choices and with most investors not ready to pay fees separately and also need a comprehensive service that most intermediaries have not adopted for the RIA model.",
      "The proposed regulation requires one to adopt either a fee-based or commission-based service and this is not allowing many existing advisors to change over and accept new fee only customers. The proposed changes in the consultation paper do not address these issues. For example if an existing commission-based advisor is having clients and he becomes a RIA, he has to stop receiving commissions and starts charging fees to investors. He also has to reduce the scope of his work from providing a comprehensive service of advice and execution to only advice.",
      {
        type: 'list',
        content: [
          'Existing advisors cannot start with new investors on fee basis unless he migrates all his existing investors',
          'Most investors and advisors are used to and prefer an embedded cost structure versus a fee only model.',
          'Existing Commission based advisors should be allowed to offer Fee Based services rather than becoming Only Fee Based services overnight.'
        ]
      },
      "Different investors and advisors will adopt different models, and investor preferences and business viability will lead to growth and co-existence of the different models. We strongly believe that regulations curtailing investor choices are not in interest of investors.",
      "Currently, majority of the advisors' remuneration is dependent on the commission income which are paid out of the cost that investor incurs on his investment.",
      "Independent Financial Advisor (IFA) are independent of any one product provider. It is essential to understand the dual role that an Independent Financial Advisor (IFA) has been performing. A role which includes an investment process of advice, sales, and service. For his services he is compensated by the product provider from the cost that is charged to the investor. Usually there is no conflict of interest as they earn for a boutique of services, which overall works out to be more cost effective for the investor. If this move is implemented, an investor will have to pay twice, once for the advice and then again for the execution. While there are smart & savvy investors out there who might be able to execute their decisions, a vast majority of the retail investors are still financially illiterate and need to be hand-held and taken through all stages of an investment life-cycle, from application to encashment.",
      {
        type: 'interview',
        speaker: "BT: Do you think Sebi to make RIA successful is forcing rules and regulation and making life difficult for distributors? And why?",
        content: "Mehta: Since the introduction of the RIA regulations, only 730 entities have registered, clearly indicating the lack of adoption of the fee-only model in India. Today there some 86,000 entities registered with AMFI providing advisory services, a majority of them (more than 80000) categorised as under Independent Financial Advisors (IFA)."
      },
      "The BCG Report on \"Equity Mutual Funds: Charting your Course with a Compass\" of June 2010 (BCG Report) indicates that nearly 100,000 IFAs are registered with AMFI and nearly 80 percent of IFAs sell other financial products in addition to mutual funds - for example, life insurance, small savings, general insurance. Of the 100,000 IFAs registered many are dormant and inactive. Most IFAs typically sell mutual funds of three or four asset management companies (AMCs). The national and regional distributors typically have a more organized and formal setup compared to IFAs with many of them having their own branch network, sales force, and online channel. In addition, many of them aggregate some of the sub-brokers' business.",
      "With regard to distribution of the mutual funds, on the customer front, IFAs service 30 to 35 per cent of retail investors, while private and foreign banks service nearly 40 to 45 per cent of the HNI investments IFAs are dominant in smaller cities and 'retail' segments, whereas banks dominate in top cities and the HNI segment. The other interesting aspect concerned the prevalence of channels of distribution by location and customers. On the location front, not surprisingly, IFAs are much larger in smaller towns. On the customer front, IFAs service 30 to 35 percent of all retail investors (less than 5 lakh), while private and foreign banks service nearly 40 to 45 percent of the HNI investments. Therefore, IFAs play an important role in the retail market.",
      "While the regulation does come with good intent, it fails to understand the ground realities of our country. People in India don't pay for advisory; usually advisory is free. Any conversation with the customer cannot happen without advice. It is akin to consulting a doctor saying you have a fever but refusing to go for tests and screenings that will help determine the cause of the fever. Separating the two would mean that the advisory will either not be done or will be unpaid for. Without the involvement of an advisor, mis-selling can increase as a distributor is reduced to guessing the product suitability since risk profiling is not taken into account.",
      "It would seem that the small number of registration is leading to measures which could force people to shift. Our concern is that the shift will be negative for the industry at large.",
      {
        type: 'interview',
        speaker: 'BT: Why didn\'t you represent last year when Sebi came out with the white paper on distributor regulation?',
        content: "Mehta: We had communicated our concerns even back then. A detailed representation was put forward to the regulator and the public at large and the websites of our members to make the people, and the regulator, aware of the issue as it directly and indirectly affects them. The stock market penetration (from the investors' point of view) in India is very low as opposed to other countries. Financial literacy is one other area where India is lagging behind, and the role of a financial advisor is incontestable. By taking away the role of the distributor, we are doing a lot of disservice to the existing investors and many investors who are not financially literate will get orphaned for the lack of distributors and advisors."
      },
      "While to an extent it did make as impact as the move to a compulsory migration of commission based distributors to Fee Based advisors seems to have been done away with, some other concerns have not been addressed and some new proposals introduced.",
      {
        type: 'interview',
        speaker: "BT: Why are you against the change in nomenclature from investment financial advisor (IFA) to mutual fund distributor (MFD)? After all its' just the change in name, IFA will be distributing mutual fund products and earning commission even under the MFD designation. Don't you think it's just a mental block? Please explain?",
        content: "Mehta: To illustrate with a simple example, when I am truly working as Independent Financial Advisor which correctly reflects the nature of work and the market, my peers, investors and my client know me by, why should a regulation force a change in nomenclature that suggests I am merely a distributor? It's not just about a name; it's about the depth and breadth of the relationship and service we provide.nomenclature which will be incorrectly reflecting my full scope of services thereby confusing my existing investors, and potentially could impact my past and future relationships? I would also not be able to approach new clients by giving a misleading and confusing impression."
      },
      "It is not just a change in name - the regulations - with this change - is indicating  that I only distribute mutual funds - but that is not correct. I am in my mind and heart an advisor and the term IFA truly reflect the nature of my work to my clients. With almost 2500+ MF schemes across multiple categories and asset classes, it is difficult for the customer to understand these schemes and decide which scheme best fits his/her requirement. Our advice and execution have a long term impact in the life and earnings of my clients. IFAs have a very different business model as compared with other intermediaries such as banks and national level distributors. IFAs in particular have more personalized relationships and do a lot more of hand holding of the client as compared to the other categories of intermediaries. They invest a lot of time in educating investors regarding financial markets and various financial products available to them. Mistakes in asset allocation ; decisions on how much of one's wealth show be divided between equity, real estate , fixed deposit and gold can have the biggest influence on having a favourable investment outcome.",
      "A simple error between purchasing a 'growth' or 'dividend' option can be an error that will take the entire financial planning of a client for a toss and can potentially not give the returns that he/she is expected.  A change in nomenclature reflects only a part of my work and is like a judgement being passed by the regulator that an IFA is not delivering the suitable and appropriate advice. This is really uncalled for - it is like calling your doctor a compounder/chemist. It shows the complete lack of understanding of the Role of an IFA.",
      "Most of the investments in this market are currently the result of an advised process which the IFA in urban and rural cities does door to door. The process typically includes PAN Card application, bank account opening, capital gains statements, Income tax queries etc. among other things. Investors who are advised by IFA's tend to build a long term relationship with them as they depend largely on the advice given to them. Therefore, a relationship is built based on trust and the IFA becomes a trusted advisor to the investor. The IFA raises the investor's awareness of needs and helps him to make the decision to take action to address that need. All this requires investment of time and effort which need to be rewarded for an IFA to sustain his business. To broad base the distribution there has to be a large fleet of distributors on the ground to ensure optimum penetration.",
      {
        type: 'interview',
        speaker: 'BT: Even if you are an RIA the rules do not stops you from selling products under a different subsidiary name and similarly you can even sell and distribute other products including insurance, bank deposit and even postal savings. So where is the problem lying? Don\'t you think regulator is just streamlining the sector and giving IFAs an industry status by you becoming an RIA?',
        content: "Mehta: That is what is being done by large Banks, Institutions, NBFC and other corporates. Some Individual IFAs have converted to LLP cos and have 2 arms for advice and execution. It is easy for large banks and big intermediaries to create multiple entities and circumvent the intent of the regulations. However, small and medium entities will be unable to do so. It is logically to ask Banks , NBFC who are into the business of lending / credit to have a separate subsidiary for the investment advisory business but it can't be made applicable to all entities especially those who are only focused only investment advice and distribution of financial products."
      },
      {
        type: 'interview',
        speaker: 'BT: What is the impact of GST on the distributor and distribution community?',
        content: "Mehta: Under the existing SEBI regulations there is an anomaly that GST ( earlier service tax) paid on investment management fees are allowed to be charged to the scheme over and over and above the the expense ratio limits prescribed by SEBI but the same is not allowed in respect of GST ( earlier service tax) in respect of commission paid to distributors . Hence the burden of GST has fallen on distributors as they are unable to pass it on to the receiver of service. However those distributors earning less than Rs. 10 lakhs of income were exempt from service tax rules and hence they did not have the burden of service tax."
      },
      "All these distributors have come under the GST net as while exemption limit have been raised to Rs. 20 lakhs the GST has to be deducted under reverse mechanism. Hence these distributors will receive their Commission after deduction of GST.",
      {
        type: 'interview',
        speaker: "BT: Why aren't AMFI and big mutual fund brokers not supporting yours cause? They aren't openly supporting you and why is that?",
        content: "Mehta: The Big Brokers are fully supporting us and the United Forum represents Banks, Brokers and IFAs, have been making joint representations to the regulator. The United Forum has been making a United and Joint representation over the last 2 years especially on Service Tax, Commission Disclosure and RIA regulations. We have been jointly approaching AMFI, SEBI and government on Industry related issues. AMFI and all AMCs are very supportive some may not be very vocal as they are worried about the regulatory backlash on their MF business as well as their other overall businesses. They however have taken a stand at various closed-door industry events and some of the bigger ones have opposed this move on public platforms."
      },
      {
        type: 'interview',
        speaker: "BT: Do you think a super regulator will be a better idea for regulating financial markets and players? And why?",
        content: "Mehta: The Justice B N Srikrishna-headed Financial Sector Legislative Reforms Commission's report has suggested having two regulators, one for banks and the other for all other financial products."
      },
      "It proposed a unified regulator for financial sector laws, including those for markets, insurance, commodities and pensions. It, however, had proposed to keep banking out of the regulator's purview.",
      "All financial markets intermediaries have an advisory role whether it is stocks, bonds, Mutual Funds, Insurance and Pension. This requires some common minimum standards. Within the Unified regulations, there could be separate regulations for different products.",
      "A common regulator would be able to take a holistic view of the investors' needs to save and investment. Indians save about $620 billion annually and this needs to be invested prudently. A fundamentally common investor centric approach needs to be taken and then specific regulations for products catering to investment, protection and pension. A common registration of intermediaries/advisors allowing them to offer all products will expand the financial intermediaries market and increase the access and availability of investment products and services enabling all households to achieve financial well being."
    ]
  },
  {
    slug: 'role-of-distributors-is-critical',
    title: '‘Role of distributors is critical in handling investor emotions’',
    date: 'Oct 19, 2021',
    source: 'Mint',
    image: '/ws7eqJqrZwRRB2iq2gSj7Vb6p0s.avif',
    paragraphs: [
      "Dhruv Mehta, chairman, Foundation of Independent Financial Advisors (Fifa), speaks to Mint about the wave of consolidation in mutual fund (MF) distribution and the role of distributors as MF transactions become increasingly available free of cost. Edited excerpts:",
      {
        type: 'interview',
        speaker: 'Can you tell us a bit about Fifa and what it does?',
        content: "Fifa is an association of mutual fund distributors and advisers set up about 10-12 years ago. We are an association representing over 2,700 individual mutual fund distributors. We started as an association with two basic objectives: one was to have knowledge-sharing among our networks so as to bring better practices and ensure favourable outcomes for our investors, and the second was to create a common voice for the individual mutual fund distribution community, so as to proactively share regulations that come. We are focused on individual distributors, and one has to be aware that distribution in India is done across three broad channels—banking, national distributors and individuals."
      },
      {
        type: 'interview',
        speaker: 'Starting in 2018, Sebi had set certain total expense ratio (TER) caps, and also made certain changes on distribution; for example, getting rid of upfront commissions. Following that, there has been a wave of mergers and consolidations among independent financial advisers (IFAs). Taking a bird’s eye view, do you see this trend continuing? Do you see this as a direct result of commissions declining?',
        content: "The trend towards consolidation, I don’t think is being driven by the cap on TERs. I think it is more being driven by the emerging environment. In that, as an individual distributor, what is becoming more apparent is that you need to have both—the breadth and depth of the knowledge. Financial markets have become so dynamic that new asset classes are appearing. And therefore, there is a sense for individuals to come together and pool their knowledge to gain an understanding of the market. Secondly, even in terms of how to do your practice, with the digitization that has happened, how do you serve your customers better, which again is very dynamic. The way technology is changing, it’s affecting business models. Again, when you look at these, the requirement for the breadth of knowledge and the effect of technology, for an individual distributor, it makes sense to collaborate with the like-minded."
      },
      {
        type: 'interview',
        speaker: 'CAMS and KFintech have launched a free website called MF Central for MF services and eventually transaction requests. This execution was seen as the primary job of a distributor. How does that role change, going forward?',
        content: "I don’t see the role changing. Primarily, the role of a distributor is to take new investors into the mutual fund. The whole shift of household savings to productive financial assets has a long way to go. Real wealth is created by people who don’t get swayed by fear and greed, and I think that, to handle the investor emotions, that is the very critical role that any distributor plays. It is a whole conversation that is required during investing; especially in times when there is an economic crisis, or a political crisis, or external events with a shake-up. So, while service is an important element, I don’t think that was the key role that a distributor was playing. Each family requires somebody to service them on not just the paper filling part, but the emotional part, understanding and knowledge."
      },
      {
        type: 'interview',
        speaker: 'Turning finally to the question of nomenclature, Sebi has said that mutual fund distributors cannot use the term IFAs, or financial advisers. Given that a significant part of your membership consists of distributors, are you considering changing the name of Fifa, or are there any other thoughts on this?',
        content: "Looking at that option, we have not made a final decision. I think Sebi’s regulations directly affect the individual distributor, but I don’t really think this affects us directly as an association."
      }
    ]
  }
];
