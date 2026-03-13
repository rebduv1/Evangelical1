import { useState, useEffect } from "react";

const COLORS = {
  navy: "#1a2744",
  gold: "#c9a84c",
  goldLight: "#e8d5a0",
  cream: "#faf6ed",
  warmWhite: "#fffdf8",
  deepBlue: "#0f1a33",
  slate: "#4a5568",
  softGold: "rgba(201,168,76,0.12)",
};

const USE_REAL_PHOTOS = true;



const HERO_BG = "/hero-bg.jpg";


const TEAM = [
  {
    name: "David N. Klein",
    title: "Founder, President & Chief Executive Officer",
    photo: "/david-klein.jpg",
    initials: "DK",
    bio: "David N. Klein is the Founder and President of the Jewish Education Fund of America (JEFA), where he leads the organization\u2019s national strategy to expand access to Jewish education through scholarship and tuition tax-credit programs. His work focuses on building sustainable administrative and financial frameworks that enable families across the United States to afford high-quality Jewish day school education while connecting donors with meaningful opportunities to support the next generation of Jewish students. Through JEFA, he is helping develop the infrastructure necessary to administer scholarship programs and advance the broader school-choice movement in support of Jewish education.",
    bioExtended: "In addition to his leadership at JEFA, David serves as Executive Director of the Lakewood Development Corporation, where he also acts as the Urban Enterprise Zone Coordinator and Administrator of Foreign Trade Zone #235 for Lakewood, New Jersey. In these roles he oversees economic development initiatives, government programs, and strategic partnerships designed to strengthen the local economy and support business growth. His work regularly involves coordinating with government agencies, business leaders, and community organizations to advance investment and development within the region.\n\nDavid\u2019s professional background includes significant experience in finance, operations, and business development. He previously served as Chief Operating Officer of Hypersonic Intercept Technologies (HIT), Inc., and previously served as Chief Operating Officer of Amplified Power & Gas, an energy services company. Earlier in his career he was Managing Director of Klein Capital LLC, a commercial real estate services firm, and served as an AVP and Senior Small Business Financial Specialist at Wachovia Bank, working closely with entrepreneurs and small businesses. He also worked as a Financial Services Representative with MetLife and earlier served as a teacher of Talmudic Law at RPRY. David holds a Master of Talmudic Law from Torah Ore Talmudic College, reflecting his longstanding commitment to Torah learning and Jewish education.",
  },
  {
    name: "Congressman Trent Franks",
    title: "Director",
    photo: "/trent-franks.jpg",
    initials: "TF",
    bio: "Congressman Trent Franks served in the U.S. House of Representatives from 2003 to 2017 representing Arizona, where he became widely known as a leading national advocate for educational freedom and school choice. Nearly three decades ago, he drafted the first federal school-choice legislation proposing a tuition tax-credit framework to help families access private and faith-based education. His work helped shape the broader movement for scholarship and tuition tax-credit programs across the United States, advancing policies designed to expand educational opportunity and empower parents to choose the best schools for their children.",
    bioExtended: "Trent\u2019s commitment to children and family policy began long before his service in Congress. At just 29 years old, he was appointed by Arizona\u2019s Governor to lead the Arizona Governor\u2019s Office for Children, a cabinet-level division responsible for coordinating statewide policy and programs serving Arizona\u2019s youth. In this role he worked to strengthen programs supporting children and families throughout the state. Because of his lifelong dedication to children\u2019s issues, Arizona state legislators later honored him with the title \u201cChildren\u2019s Champion.\u201d He is also the founder of the Arizona Family Research Institute, an organization dedicated to strengthening families and promoting values-based public policy.\n\nDuring his time in Congress, Franks also became one of the strongest advocates for Israel and the Jewish people in the United States government. He served as Chairman of the bipartisan Israel Allies Caucus in the U.S. House of Representatives and was widely regarded by colleagues and community leaders as \u201cthe most pro-Israel member of Congress.\u201d Throughout his career he has consistently worked to strengthen the U.S.\u2013Israel relationship and to support policies that protect religious freedom and faith-based education.",
  },
  {
    name: "Philip Skaist",
    title: "Chief Marketing Officer",
    photo: "/philip-skaist.jpg",
    initials: "PS",
    bio: "Philip Skaist serves as Chief Marketing Officer of the Jewish Education Fund of America (JEFA), where he leads the organization\u2019s national communications, branding, and donor outreach strategy. In this role, he oversees the development of marketing campaigns, media production, and digital storytelling designed to expand awareness of Jewish educational scholarship opportunities and inspire philanthropic support for Orthodox Jewish day school education across the United States.",
    bioExtended: "Philip brings more than two decades of experience in media production, marketing, and communications. As the owner of Signature Video Productions since 2004, he has worked with organizations, businesses, and community institutions to produce high-quality visual media and marketing content. His background in customer relations and communications, including experience with IDT Corporation, has helped him develop a strong ability to craft compelling messaging, manage fast-paced projects, and execute campaigns under tight deadlines.\n\nEarlier in his career, Philip served as a teacher at the Hebrew Academy of San Francisco, reflecting his longstanding commitment to Jewish education and community life. He studied at the Talmudical Academy of Baltimore and continued his learning at Ner Israel Rabbinical College. His combination of educational experience, media expertise, and dedication to strengthening Jewish institutions helps JEFA communicate its mission of expanding access to high-quality Jewish education for families across America.",
  },
  {
    name: "Joshua Brotsky",
    title: "Chief Financial Officer",
    photo: "/josh-brotsky.jpg",
    initials: "JB",
    bio: "Joshua Brotsky serves as Chief Financial Officer of the Jewish Education Fund of America (JEFA), where he oversees the organization\u2019s financial management, operational systems, and fiscal accountability. In this role, he is responsible for developing financial processes that support JEFA\u2019s scholarship-granting programs, ensuring transparent stewardship of donor funds, and helping build the administrative infrastructure required to scale educational scholarship initiatives that expand access to Jewish day school education.",
    bioExtended: "Joshua brings more than a decade of leadership experience in financial administration, operations management, and organizational systems. As General Manager of CYA Trading in Lakewood, New Jersey, he managed company operations and implemented modern organizational tools and workflow systems to improve productivity, communication, and financial tracking. He has extensive experience using financial and management software including QuickBooks, Excel, and collaborative productivity platforms, and is known for building efficient systems that help organizations operate smoothly and maintain strong internal controls.\n\nEarlier in his career, Joshua served as Administrator of Yeshiva Medrash Chaim, where he managed tuition collections, donor relations, financial reporting, and event coordination for the institution. He also held the role of Operations Manager at Community Care Behavioral Health, overseeing logistics, transportation operations, and facility compliance. Joshua earned a Bachelor\u2019s degree in Talmudic Studies from Fairleigh Dickinson University and brings to JEFA a strong commitment to responsible financial stewardship and the advancement of Jewish education.",
  },
  {
    name: "Chaim Orelowitz",
    title: "Director of Operations",
    photo: null,
    initials: "CO",
    bio: "Chaim Orelowitz serves as Director of Operations for the Jewish Education Fund of America (JEFA), where he manages organizational operations, program coordination, and community engagement initiatives that support JEFA\u2019s mission of expanding access to Orthodox Jewish education. In this role, he helps oversee the administrative and operational systems that allow JEFA\u2019s scholarship and education initiatives to function efficiently while coordinating with community partners, schools, and families.",
    bioExtended: "Chaim brings a diverse background in education, social services, and nonprofit program management. He previously served as a Project Manager and Licensed Social Worker (LSW) with the Lakewood Community Service Corporation, where he worked on community outreach initiatives and social service programs. His experience includes providing clinical social work services to children and young adults, conducting assessments for community programs, and assisting with digital outreach efforts that connect families with vital services.\n\nEarlier in his career, Chaim worked extensively in Jewish education as a teacher in Lakewood, including at Tashbar of Lakewood and through Catapult Learning, where he developed personalized curriculum for students with specialized learning needs. He also served as a program coordinator with Aish HaTorah, where he expanded a national business mentorship program connecting young professionals with industry leaders. Chaim holds a Master of Social Work from the Wurzweiler Graduate School of Social Work and a Bachelor\u2019s degree in Political Science from Touro University. His experience in education, community services, and program management helps ensure JEFA operates effectively while strengthening opportunities for Jewish students and families.",
  },
];

function JefaLogo({ size = 40 }) {
  return (
    <img
      src="/jefa-logo.png"
      alt="JEFA - Jewish Education Fund of America"
      style={{ width: size, height: size, objectFit: "contain", borderRadius: "50%" }}
    />
  );
}

function SectionDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, margin: "48px 0" }}>
      <div style={{ height: 1, width: 80, background: `linear-gradient(to right, transparent, ${COLORS.gold})` }} />
      <JefaLogo size={32} />
      <div style={{ height: 1, width: 80, background: `linear-gradient(to left, transparent, ${COLORS.gold})` }} />
    </div>
  );
}

function PersonPhoto({ person, size = 120 }) {
  const photoSrc = USE_REAL_PHOTOS && person.photo ? person.photo : null;
  if (photoSrc) {
    return <img src={photoSrc} alt={person.name} style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: `3px solid ${COLORS.gold}`, boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }} />;
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.deepBlue})`,
      border: `3px solid ${COLORS.gold}`, display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Cormorant Garamond', serif", fontSize: size * 0.35, fontWeight: 700, color: COLORS.goldLight,
      letterSpacing: 2, boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    }}>{person.initials}</div>
  );
}

function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navItems = [
    { key: "home", label: "Home" },
    { key: "register", label: "Pre-Register" },
    { key: "faq", label: "FAQ" },
    { key: "about", label: "About Us" },
    { key: "contact", label: "Contact Us" },
  ];

  const handleNav = (key) => {
    setMobileOpen(false);
    if (key === "faq") {
      setPage("home");
      setTimeout(() => document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      setPage(key);
    }
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? "10px 0" : "16px 0",
      background: scrolled ? "rgba(15,26,51,0.97)" : "rgba(15,26,51,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: `1px solid rgba(201,168,76,${scrolled ? 0.3 : 0.1})`,
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => handleNav("home")}>
          <JefaLogo size={38} />
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 700, color: COLORS.goldLight, letterSpacing: 1, lineHeight: 1.1 }}>JEFA</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 9, color: COLORS.goldLight, letterSpacing: 2, opacity: 0.7 }}>JEWISH EDUCATION FUND OF AMERICA</div>
          </div>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", background: "none", border: "none", color: COLORS.goldLight, fontSize: 24, cursor: "pointer", padding: 4 }} className="mobile-menu-btn">
          {mobileOpen ? "✕" : "☰"}
        </button>
        <div style={{ display: "flex", gap: 6 }} className="desktop-nav">
          {navItems.map((item) => (
            <button key={item.key} onClick={() => handleNav(item.key)} style={{
              background: page === item.key && item.key !== "faq" ? `linear-gradient(135deg, ${COLORS.gold}, #b8943f)` : "transparent",
              color: page === item.key && item.key !== "faq" ? COLORS.deepBlue : COLORS.goldLight,
              border: page === item.key && item.key !== "faq" ? "none" : `1px solid rgba(201,168,76,0.2)`,
              padding: "7px 16px", borderRadius: 6, fontFamily: "'EB Garamond', serif",
              fontSize: 13, fontWeight: 600, cursor: "pointer", letterSpacing: 0.3,
            }}>{item.label}</button>
          ))}
        </div>
      </div>
      {mobileOpen && (
        <div style={{ padding: "12px 24px", display: "flex", flexDirection: "column", gap: 8 }} className="mobile-nav">
          {navItems.map((item) => (
            <button key={item.key} onClick={() => handleNav(item.key)} style={{
              background: "transparent", color: COLORS.goldLight, border: "none", padding: "10px 0",
              fontFamily: "'EB Garamond', serif", fontSize: 16, fontWeight: 600, cursor: "pointer",
              textAlign: "left", borderBottom: `1px solid rgba(201,168,76,0.1)`,
            }}>{item.label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

function SectionHeader({ subtitle, title }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, letterSpacing: 3, color: COLORS.gold, textTransform: "uppercase", marginBottom: 12 }}>{subtitle}</p>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: COLORS.navy, lineHeight: 1.2 }}>{title}</h2>
    </div>
  );
}

function ScriptureQuote({ text, reference }) {
  return (
    <blockquote style={{ background: `linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))`, border: `1px solid rgba(201,168,76,0.15)`, borderLeft: `3px solid ${COLORS.gold}`, borderRadius: 8, padding: "24px 28px", margin: "24px 0" }}>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: "italic", fontWeight: 700, color: COLORS.navy, lineHeight: 1.6, margin: 0 }}>"{text}"</p>
      <cite style={{ display: "block", marginTop: 12, fontFamily: "'EB Garamond', serif", fontSize: 14, color: COLORS.gold, fontStyle: "normal", fontWeight: 600, letterSpacing: 1 }}>— {reference}</cite>
    </blockquote>
  );
}

function InfoCard({ icon, title, children }) {
  return (
    <div style={{ background: COLORS.warmWhite, border: `1px solid rgba(201,168,76,0.15)`, borderRadius: 12, padding: 32, flex: "1 1 300px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${COLORS.gold}, transparent)` }} />
      <div style={{ width: 48, height: 48, borderRadius: 10, background: COLORS.softGold, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: 22 }}>{icon}</div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 700, color: COLORS.navy, marginBottom: 12 }}>{title}</h3>
      <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 16, color: COLORS.slate, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: `1px solid rgba(201,168,76,0.1)` }}>
      <div style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.gold}, #b8943f)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: COLORS.deepBlue, flexShrink: 0 }}>{number}</div>
      <div>
        <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: 700, color: COLORS.navy, marginBottom: 6 }}>{title}</h4>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 16, color: COLORS.slate, lineHeight: 1.7, margin: 0 }}>{description}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid rgba(201,168,76,0.15)`, padding: "20px 0" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0, textAlign: "left" }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: 700, color: COLORS.navy, paddingRight: 16 }}>{question}</span>
        <span style={{ fontSize: 22, color: COLORS.gold, transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease", flexShrink: 0 }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 500 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 16, color: COLORS.slate, lineHeight: 1.7, marginTop: 12, marginBottom: 0 }}>{answer}</p>
      </div>
    </div>
  );
}

// ─── PAGES ───

function HeroSection({ setPage }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: COLORS.deepBlue }}>
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${USE_REAL_PHOTOS ? HERO_BG : HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
      {/* Dark overlay for text readability */}
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(170deg, rgba(15,26,51,0.7) 0%, rgba(26,39,68,0.55) 50%, rgba(15,26,51,0.75) 100%)` }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.gold} 0, ${COLORS.gold} 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, ${COLORS.gold} 0, ${COLORS.gold} 1px, transparent 1px, transparent 20px)` }} />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "120px 32px 80px", textAlign: "center", position: "relative", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)" }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: 40, padding: "8px 24px" }}>
            <JefaLogo size={24} />
            <span style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, color: COLORS.goldLight, letterSpacing: 3, textTransform: "uppercase" }}>A Covenant Partnership</span>
          </div>
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5.5vw, 60px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 24, background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight}, ${COLORS.gold})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: -0.5 }}>
          Turn Your IRS Tax Obligation<br />into a Blessing
        </h1>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px, 3vw, 28px)", fontStyle: "italic", color: "rgba(232,213,160,0.85)", lineHeight: 1.5, marginBottom: 12, fontWeight: 400 }}>
          "I will bless those who bless you" <span style={{ fontStyle: "normal", fontSize: "0.8em", opacity: 0.7 }}>— Genesis 12:3</span>
        </p>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(16px, 2.2vw, 20px)", color: "rgba(232,213,160,0.7)", lineHeight: 1.7, maxWidth: 660, margin: "0 auto 40px" }}>
          Support Orthodox Jewish children's Torah education — at zero cost to you — through the new <strong style={{ color: COLORS.goldLight }}>Education Freedom Tax Credit</strong>.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => setPage("register")} style={{ background: `linear-gradient(135deg, ${COLORS.gold}, #b8943f)`, color: COLORS.deepBlue, border: "none", padding: "16px 40px", borderRadius: 8, fontFamily: "'EB Garamond', serif", fontSize: 17, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 24px rgba(201,168,76,0.3)" }}>Pre-Register With JEFA →</button>
          <button onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "transparent", color: COLORS.goldLight, border: `1.5px solid rgba(201,168,76,0.4)`, padding: "16px 36px", borderRadius: 8, fontFamily: "'EB Garamond', serif", fontSize: 17, fontWeight: 600, cursor: "pointer" }}>Learn How It Works</button>
        </div>
        <div style={{ marginTop: 56, display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {[{ num: "$1,700", label: "Dollar-for-Dollar Tax Credit" }, { num: "23+", label: "States Opted In" }, { num: "$0", label: "Net Cost to You" }].map((s,i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 700, color: COLORS.gold }}>{s.num}</div>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, color: "rgba(232,213,160,0.6)", letterSpacing: 1.5, textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage({ setPage }) {
  return (
    <div>
      <HeroSection setPage={setPage} />
      <section style={{ background: COLORS.cream, padding: "80px 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <SectionHeader subtitle="The Biblical Foundation" title="Why Torah Education Matters" />
          <ScriptureQuote text="I will bless those who bless you, and whoever curses you I will curse; and all peoples on earth will be blessed through you." reference="Genesis 12:3" />
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, color: COLORS.slate, lineHeight: 1.8, marginBottom: 24 }}>Scripture does not only call believers to defend Israel's borders — it calls us to preserve the people through whom God chose to reveal His Word to the world. The survival of the Jewish people has always depended upon one sacred transmission: parents teaching children the Torah from generation to generation.</p>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, color: COLORS.slate, lineHeight: 1.8, marginBottom: 24 }}>Political security protects a nation. <strong style={{ color: COLORS.navy }}>Spiritual continuity preserves a people.</strong></p>
          <ScriptureQuote text="Teach them to your children, talking about them when you sit at home and when you walk along the road, when you lie down and when you get up." reference="Deuteronomy 11:19" />
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, color: COLORS.slate, lineHeight: 1.8 }}>This moment allows Christians to stand beside Torah-observant Jewish families in ensuring that the covenant witness entrusted to Israel continues faithfully into the next generation.</p>
        </div>
      </section>
      <section id="how-it-works" style={{ background: COLORS.warmWhite, padding: "80px 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <SectionHeader subtitle="The Education Freedom Tax Credit" title="How It Works" />
          <div style={{ background: `linear-gradient(135deg, ${COLORS.deepBlue}, ${COLORS.navy})`, borderRadius: 16, padding: "36px 32px", marginBottom: 40 }}>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, color: COLORS.goldLight, lineHeight: 1.7, margin: 0, textAlign: "center" }}>Signed into law on <strong>July 4, 2025</strong> as part of the One Big Beautiful Bill Act, the <strong>Educational Choice for Children Act</strong> created a brand-new federal tax credit. Individual taxpayers can donate up to <strong style={{ color: COLORS.gold, fontSize: 22 }}>$1,700</strong> to a qualified Scholarship Granting Organization and receive a <strong>dollar-for-dollar credit</strong> against their federal tax liability.</p>
          </div>
          <StepCard number="1" title="You Make a Contribution" description="Donate up to $1,700 (or any portion) to JEFA, a qualified Scholarship Granting Organization that funds Orthodox Jewish K-12 religious education." />
          <StepCard number="2" title="You Claim Your Tax Credit" description="When you file your federal taxes, you receive a dollar-for-dollar credit — not a deduction, but a full credit. If you owe $5,000 and donate $1,700, your tax bill drops to $3,300." />
          <StepCard number="3" title="Children Receive Scholarships" description="JEFA distributes your contribution as scholarships to Orthodox Jewish children for tuition, fees, supplies, and other qualified K-12 education expenses." />
          <StepCard number="4" title="Torah Education Continues" description="Your redirected tax dollars help ensure Jewish children can continue learning Torah, Talmud, and their sacred heritage — preserving spiritual continuity for the next generation." />
          <div style={{ background: COLORS.softGold, border: `1px solid rgba(201,168,76,0.2)`, borderRadius: 12, padding: 28, marginTop: 32 }}>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 16, color: COLORS.navy, lineHeight: 1.7, margin: 0 }}><strong>Important Details:</strong> The credit takes effect for contributions beginning <strong>January 1, 2027</strong>. Donors in any state can contribute to SGOs in participating states. As of early 2026, 23 states have opted in. The credit is permanent with no cap on total donations. Unused credit can be carried forward for up to 5 years.</p>
          </div>
        </div>
      </section>
      <section style={{ background: COLORS.cream, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionHeader subtitle="Beyond Crisis, Beyond Politics" title="A Third Dimension of Standing With Israel" />
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <InfoCard icon="🙏" title="Beyond Prayer">For decades, Christians have prayed faithfully for the peace of Jerusalem. This initiative transforms prayer into tangible action — a yearly practice of blessing the descendants of Abraham at the family level.</InfoCard>
            <InfoCard icon="🤝" title="Beyond Advocacy">Christians organizations that support Israel and the Jewish people have mobilized millions for political support. This adds a deeply personal dimension: directly supporting the religious education that sustains Jewish identity.</InfoCard>
            <InfoCard icon="📖" title="Covenantal Partnership">This is not charity. It is covenant partnership. Christians can now participate annually in preserving the people through whom Scripture came to the world.</InfoCard>
          </div>
        </div>
      </section>
      <section id="faq-section" style={{ background: COLORS.warmWhite, padding: "80px 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <SectionHeader subtitle="Common Questions" title="Frequently Asked Questions" />
          <FAQItem question="What is a Scholarship Granting Organization (SGO)?" answer="An SGO is a 501(c)(3) tax-exempt nonprofit organization that accepts donations and uses at least 90% of its income to fund K-12 education scholarships for eligible students. JEFA — the Jewish Education Fund of America — is a registered 501(c)(3) Scholarship Granting Organization that specifically funds Orthodox Jewish children's religious education. All contributions to JEFA are tax-deductible, and donors receive the additional benefit of the dollar-for-dollar Education Freedom Tax Credit." />
          <FAQItem question="Does this actually cost me anything?" answer="No. The Education Freedom Tax Credit is a dollar-for-dollar credit, not a tax deduction. Every dollar you contribute to JEFA reduces your federal tax bill by exactly one dollar. You're simply choosing to redirect up to $1,700 that would otherwise go to the IRS." />
          <FAQItem question="What is the difference between a tax credit and a tax deduction?" answer="A tax deduction merely reduces your taxable income — so a $1,700 deduction might save you a few hundred dollars depending on your bracket. A dollar-for-dollar tax credit directly reduces what you owe by the full amount. If you owe $5,000 and claim a $1,700 credit, you now owe $3,300. The entire $1,700 goes to children's education." />
          <FAQItem question="When does the program begin?" answer="The law was signed on July 4, 2025. Taxpayers can begin claiming the credit for contributions made starting January 1, 2027. JEFA is accepting pre-registrations now so you'll be ready when the program launches." />
          <FAQItem question="Does my state need to opt in?" answer="Your state does not need to opt in for you to donate and receive the tax credit. Any taxpayer nationwide can contribute to a qualified SGO in a participating state and claim the credit. However, for students in your state to receive scholarships, your state must opt in. As of early 2026, 23 states have opted in." />
          <FAQItem question="Who qualifies for the scholarships?" answer="Students must live in households earning no more than 300% of their area's median income and be eligible to enroll in K-12 schools. Most American families qualify. Scholarships can be used for tuition, fees, textbooks, tutoring, and other qualified education expenses." />
          <FAQItem question="Can I donate less than $1,700?" answer="Absolutely. You can contribute any amount up to $1,700 and receive a dollar-for-dollar credit for whatever you give. Even a $500 contribution means $500 less in taxes owed and $500 toward a Jewish child's Torah education." />

        </div>
      </section>
      <section style={{ background: `linear-gradient(170deg, ${COLORS.deepBlue}, ${COLORS.navy})`, padding: "80px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.gold} 0, ${COLORS.gold} 1px, transparent 1px, transparent 24px)` }} />
        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
          <JefaLogo size={56} />
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: COLORS.cream, marginTop: 24, marginBottom: 16 }}>Ready to Stand With Israel?</h2>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 19, color: "rgba(232,213,160,0.8)", lineHeight: 1.7, marginBottom: 36 }}>Pre-register with JEFA today so you'll be among the first to redirect your tax dollars toward Torah education when the program launches in 2027.</p>
          <button onClick={() => setPage("register")} style={{ background: `linear-gradient(135deg, ${COLORS.gold}, #b8943f)`, color: COLORS.deepBlue, border: "none", padding: "18px 48px", borderRadius: 8, fontFamily: "'EB Garamond', serif", fontSize: 18, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 24px rgba(201,168,76,0.3)" }}>Pre-Register Now →</button>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  const [expandedMember, setExpandedMember] = useState(null);
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ background: `linear-gradient(170deg, ${COLORS.deepBlue}, ${COLORS.navy})`, padding: "60px 24px 50px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.gold} 0, ${COLORS.gold} 1px, transparent 1px, transparent 20px)` }} />
        <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, letterSpacing: 3, color: COLORS.gold, textTransform: "uppercase", marginBottom: 12 }}>Jewish Education Fund of America</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 700, color: COLORS.cream, lineHeight: 1.2, marginBottom: 16 }}>About <span style={{ color: COLORS.gold }}>JEFA</span></h1>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 17, color: "rgba(232,213,160,0.75)", lineHeight: 1.6 }}>Building a covenant partnership between Christians and Jewish families to preserve Torah education for the next generation.</p>
        </div>
      </section>
      <section style={{ background: COLORS.cream, padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <SectionHeader subtitle="Who We Are" title="Mission, Vision & Values" />
          {[
            { icon: "🎯", label: "Our Mission", text: "The Jewish Education Fund of America (JEFA) supports Torah education of Orthodox Jewish children through the Education Freedom Tax Credit. By fostering a covenant partnership between Christians and Jewish families, we encourage spiritual continuity and strengthen the preservation of Jewish heritage for generations to come." },
            { icon: "🔭", label: "Our Vision", text: "To build a future where the sacred traditions of Torah education thrive, ensuring that every Orthodox Jewish child has access to the tools and teachings needed to carry forward the spiritual legacy of their faith. Through partnerships rooted in mutual respect and shared values, we strive to be a beacon of hope and unity, creating a lasting impact on both communities and the world." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: COLORS.softGold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: COLORS.navy }}>{item.label}</h3>
              </div>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, color: COLORS.slate, lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: COLORS.softGold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>💎</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, color: COLORS.navy }}>Our Values</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { t: "Spiritual Continuity", d: "Preserving the Torah's teachings by empowering parents and schools to instill faith and tradition in the next generation." },
                { t: "Covenant Partnership", d: "Collaboration between Christians and Jewish families rooted in shared values, mutual respect, and dedication to Torah education." },
                { t: "Legacy & Education", d: "Bridging generations to ensure the timeless wisdom and traditions of Torah are lovingly passed down to the next." },
                { t: "Compassion & Action", d: "Transforming prayer and advocacy into tangible educational support for children, families, and communities." },
                { t: "Integrity & Stewardship", d: "Stewarding resources responsibly, ensuring every contribution maximizes its impact while honoring supporters' trust." },
              ].map((v, i) => (
                <div key={i} style={{ background: COLORS.warmWhite, border: `1px solid rgba(201,168,76,0.15)`, borderRadius: 12, padding: 24 }}>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: 700, color: COLORS.navy, marginBottom: 8 }}>{v.t}</h4>
                  <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 15, color: COLORS.slate, lineHeight: 1.7, margin: 0 }}>{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: COLORS.warmWhite, padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionHeader subtitle="Our Leadership" title="Board of Directors" />
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {TEAM.map((person, i) => (
              <div key={i} style={{ background: COLORS.cream, border: `1px solid rgba(201,168,76,0.15)`, borderRadius: 16, padding: "32px 28px", display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ width: 130, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <PersonPhoto person={person} size={110} />
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: COLORS.navy, marginTop: 12, textAlign: "center", lineHeight: 1.2 }}>{person.name}</h3>
                  <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 14, color: COLORS.gold, fontWeight: 600, textAlign: "center", margin: 0 }}>{person.title}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 16, color: COLORS.slate, lineHeight: 1.7, margin: 0 }}>{person.bio}</p>
                  {person.bioExtended && (
                    <>
                      {expandedMember === i && person.bioExtended.split("\n\n").map((para, pi) => (
                        <p key={pi} style={{ fontFamily: "'EB Garamond', serif", fontSize: 16, color: COLORS.slate, lineHeight: 1.7, marginTop: 12 }}>{para}</p>
                      ))}
                      <button onClick={() => setExpandedMember(expandedMember === i ? null : i)} style={{ background: "none", border: "none", color: COLORS.gold, fontFamily: "'EB Garamond', serif", fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 8, padding: 0 }}>
                        {expandedMember === i ? "Show less ▲" : "Read more ▼"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (f) => (e) => setForm({ ...form, [f]: e.target.value });
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) { alert("Please fill in your name, email, and message."); return; }
    setSubmitting(true); setError("");
    try {
      const res = await fetch("https://formspree.io/f/mvzwkrdo", { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify({ "_subject": `JEFA Contact: ${form.subject || "General Inquiry"}`, "Name": form.name, "Email": form.email, "Subject": form.subject, "Message": form.message, "_replyto": form.email, "Form Type": "Contact Us" }) });
      if (res.ok) setSubmitted(true); else setError("Something went wrong. Please email info@jefamerica.org directly.");
    } catch { setError("Unable to connect. Please email info@jefamerica.org directly."); }
    setSubmitting(false);
  };
  const inputStyle = { width: "100%", padding: "14px 16px", border: `1px solid rgba(201,168,76,0.3)`, borderRadius: 8, fontFamily: "'EB Garamond', serif", fontSize: 16, color: COLORS.navy, background: COLORS.warmWhite, outline: "none", boxSizing: "border-box" };
  const labelStyle = { fontFamily: "'EB Garamond', serif", fontSize: 14, fontWeight: 600, color: COLORS.navy, letterSpacing: 0.5, marginBottom: 6, display: "block" };

  if (submitted) return (
    <div style={{ minHeight: "100vh", background: COLORS.cream, paddingTop: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", padding: 48, textAlign: "center", background: COLORS.warmWhite, borderRadius: 16, border: `1px solid rgba(201,168,76,0.2)`, boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
        <JefaLogo size={64} />
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 700, color: COLORS.navy, marginTop: 16, marginBottom: 16 }}>Message Sent!</h2>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, color: COLORS.slate, lineHeight: 1.7 }}>Thank you for reaching out. Our team will respond to your inquiry as soon as possible.</p>
      </div>
    </div>
  );

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ background: `linear-gradient(170deg, ${COLORS.deepBlue}, ${COLORS.navy})`, padding: "60px 24px 50px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.gold} 0, ${COLORS.gold} 1px, transparent 1px, transparent 20px)` }} />
        <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, letterSpacing: 3, color: COLORS.gold, textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 700, color: COLORS.cream, lineHeight: 1.2, marginBottom: 16 }}>Contact <span style={{ color: COLORS.gold }}>JEFA</span></h1>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 17, color: "rgba(232,213,160,0.75)", lineHeight: 1.6 }}>Have questions about the Education Freedom Tax Credit or how to get involved? We'd love to hear from you.</p>
        </div>
      </section>
      <section style={{ background: COLORS.cream, padding: "48px 24px 80px" }}>
        <div style={{ maxWidth: 580, margin: "0 auto", background: COLORS.warmWhite, borderRadius: 16, border: `1px solid rgba(201,168,76,0.15)`, padding: "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 16, color: COLORS.slate, margin: 0 }}>You can also email us directly at <a href="mailto:info@jefamerica.org" style={{ color: COLORS.gold, fontWeight: 600 }}>info@jefamerica.org</a></p>
          </div>
          <div style={{ marginBottom: 20 }}><label style={labelStyle}>Your Name *</label><input style={inputStyle} value={form.name} onChange={handleChange("name")} placeholder="John Smith" /></div>
          <div style={{ marginBottom: 20 }}><label style={labelStyle}>Email Address *</label><input style={inputStyle} type="email" value={form.email} onChange={handleChange("email")} placeholder="john@example.com" /></div>
          <div style={{ marginBottom: 20 }}><label style={labelStyle}>Subject</label><input style={inputStyle} value={form.subject} onChange={handleChange("subject")} placeholder="What is this regarding?" /></div>
          <div style={{ marginBottom: 32 }}><label style={labelStyle}>Message *</label><textarea style={{ ...inputStyle, minHeight: 140, resize: "vertical" }} value={form.message} onChange={handleChange("message")} placeholder="Your question or message..." /></div>
          <button onClick={handleSubmit} disabled={submitting} style={{ width: "100%", background: submitting ? "#a08a4a" : `linear-gradient(135deg, ${COLORS.gold}, #b8943f)`, color: COLORS.deepBlue, border: "none", padding: "18px 0", borderRadius: 10, fontFamily: "'EB Garamond', serif", fontSize: 18, fontWeight: 700, cursor: submitting ? "wait" : "pointer", opacity: submitting ? 0.7 : 1, boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}>{submitting ? "Sending..." : "Send Message"}</button>
          {error && <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 15, color: "#c0392b", textAlign: "center", marginTop: 12 }}>{error}</p>}
        </div>
      </section>
    </div>
  );
}

function RegisterPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", state: "", church: "", amount: "", hearAbout: "", comments: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (f) => (e) => setForm({ ...form, [f]: e.target.value });
  const handleSubmit = async () => {
    if (!form.firstName || !form.email) { alert("Please fill in at least your first name and email."); return; }
    setSubmitting(true); setError("");
    try {
      const res = await fetch("https://formspree.io/f/mvzwkrdo", { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify({ "First Name": form.firstName, "Last Name": form.lastName, "Email": form.email, "Phone": form.phone, "State": form.state, "Church / Fellowship": form.church, "Anticipated Amount": form.amount, "How They Heard About JEFA": form.hearAbout, "Comments": form.comments, "Form Type": "Pre-Registration" }) });
      if (res.ok) setSubmitted(true); else setError("Something went wrong. Please try again.");
    } catch { setError("Unable to connect. Please check your internet and try again."); }
    setSubmitting(false);
  };
  const inputStyle = { width: "100%", padding: "14px 16px", border: `1px solid rgba(201,168,76,0.3)`, borderRadius: 8, fontFamily: "'EB Garamond', serif", fontSize: 16, color: COLORS.navy, background: COLORS.warmWhite, outline: "none", boxSizing: "border-box" };
  const labelStyle = { fontFamily: "'EB Garamond', serif", fontSize: 14, fontWeight: 600, color: COLORS.navy, letterSpacing: 0.5, marginBottom: 6, display: "block" };

  if (submitted) return (
    <div style={{ minHeight: "100vh", background: COLORS.cream, paddingTop: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", padding: 48, textAlign: "center", background: COLORS.warmWhite, borderRadius: 16, border: `1px solid rgba(201,168,76,0.2)`, boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
        <JefaLogo size={64} />
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 700, color: COLORS.navy, marginTop: 16, marginBottom: 16 }}>Thank You!</h2>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, color: COLORS.slate, lineHeight: 1.7 }}>Your pre-registration has been received. We will contact you as the Education Freedom Tax Credit program approaches its January 2027 launch.</p>
        <SectionDivider />
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: "italic", color: COLORS.gold }}>"I will bless those who bless you."<br /><span style={{ fontSize: 14, fontStyle: "normal", letterSpacing: 1 }}>— Genesis 12:3</span></p>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: COLORS.cream, paddingTop: 80 }}>
      <section style={{ background: `linear-gradient(170deg, ${COLORS.deepBlue}, ${COLORS.navy})`, padding: "60px 24px 50px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.gold} 0, ${COLORS.gold} 1px, transparent 1px, transparent 20px)` }} />
        <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, letterSpacing: 3, color: COLORS.gold, textTransform: "uppercase", marginBottom: 12 }}>Jewish Education Fund of America</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 700, color: COLORS.cream, lineHeight: 1.2, marginBottom: 16 }}>Pre-Register for the<br /><span style={{ color: COLORS.gold }}>Education Freedom Tax Credit</span></h1>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 17, color: "rgba(232,213,160,0.75)", lineHeight: 1.6 }}>Be among the first to redirect your tax dollars toward Orthodox Jewish children's Torah education when the program launches in January 2027.</p>
        </div>
      </section>
      <section style={{ padding: "48px 24px 80px" }}>
        <div style={{ maxWidth: 620, margin: "0 auto", background: COLORS.warmWhite, borderRadius: 16, border: `1px solid rgba(201,168,76,0.15)`, padding: "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, color: COLORS.navy, marginBottom: 8 }}>Your Information</h3>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 15, color: COLORS.slate, marginBottom: 32 }}>Fields marked with * are required.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            <div><label style={labelStyle}>First Name *</label><input style={inputStyle} value={form.firstName} onChange={handleChange("firstName")} placeholder="John" /></div>
            <div><label style={labelStyle}>Last Name</label><input style={inputStyle} value={form.lastName} onChange={handleChange("lastName")} placeholder="Smith" /></div>
          </div>
          <div style={{ marginBottom: 20 }}><label style={labelStyle}>Email Address *</label><input style={inputStyle} type="email" value={form.email} onChange={handleChange("email")} placeholder="john@example.com" /></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            <div><label style={labelStyle}>Phone Number</label><input style={inputStyle} value={form.phone} onChange={handleChange("phone")} placeholder="(555) 123-4567" /></div>
            <div><label style={labelStyle}>State</label><input style={inputStyle} value={form.state} onChange={handleChange("state")} placeholder="e.g. Texas" /></div>
          </div>
          <div style={{ marginBottom: 20 }}><label style={labelStyle}>Church or Fellowship (optional)</label><input style={inputStyle} value={form.church} onChange={handleChange("church")} placeholder="Your church name" /></div>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Anticipated Contribution Amount</label>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["$500", "$1,000", "$1,700 (Maximum)", "Other"].map((amt) => (
                <button key={amt} onClick={() => setForm({ ...form, amount: amt })} style={{ padding: "10px 20px", borderRadius: 8, border: form.amount === amt ? `2px solid ${COLORS.gold}` : `1px solid rgba(201,168,76,0.3)`, background: form.amount === amt ? COLORS.softGold : "transparent", fontFamily: "'EB Garamond', serif", fontSize: 15, color: COLORS.navy, cursor: "pointer", fontWeight: form.amount === amt ? 700 : 400 }}>{amt}</button>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>How did you hear about JEFA?</label>
            <select style={{ ...inputStyle, cursor: "pointer", appearance: "auto" }} value={form.hearAbout} onChange={handleChange("hearAbout")}>
              <option value="">Select one...</option>
              <option value="church">Church or pastor</option>
              <option value="cufi">Christians United for Israel</option>
              <option value="friend">Friend or family member</option>
              <option value="social">Social media</option>
              <option value="news">News article</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div style={{ marginBottom: 32 }}><label style={labelStyle}>Questions or Comments</label><textarea style={{ ...inputStyle, minHeight: 100, resize: "vertical" }} value={form.comments} onChange={handleChange("comments")} placeholder="Anything you'd like us to know..." /></div>
          <button onClick={handleSubmit} disabled={submitting} style={{ width: "100%", background: submitting ? "#a08a4a" : `linear-gradient(135deg, ${COLORS.gold}, #b8943f)`, color: COLORS.deepBlue, border: "none", padding: "18px 0", borderRadius: 10, fontFamily: "'EB Garamond', serif", fontSize: 18, fontWeight: 700, cursor: submitting ? "wait" : "pointer", opacity: submitting ? 0.7 : 1, boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}>{submitting ? "Submitting..." : "Submit Pre-Registration"}</button>
          {error && <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 15, color: "#c0392b", textAlign: "center", marginTop: 12 }}>{error}</p>}
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, color: COLORS.slate, textAlign: "center", marginTop: 16, opacity: 0.7 }}>By pre-registering, you are expressing interest. No financial commitment is required at this time.</p>
        </div>
      </section>
    </div>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ background: COLORS.deepBlue, borderTop: `1px solid rgba(201,168,76,0.15)`, padding: "40px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <JefaLogo size={32} />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 700, color: COLORS.goldLight, letterSpacing: 1 }}>JEFA</span>
          </div>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, color: "rgba(232,213,160,0.5)", margin: 0 }}>Jewish Education Fund of America</p>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, color: "rgba(232,213,160,0.4)", margin: "4px 0 0" }}>info@jefamerica.org</p>
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {[{ key: "home", label: "Home" }, { key: "about", label: "About Us" }, { key: "contact", label: "Contact Us" }, { key: "register", label: "Pre-Register" }].map((item) => (
            <button key={item.key} onClick={() => setPage(item.key)} style={{ background: "none", border: "none", fontFamily: "'EB Garamond', serif", fontSize: 14, color: "rgba(232,213,160,0.6)", cursor: "pointer" }}>{item.label}</button>
          ))}
        </div>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 12, color: "rgba(232,213,160,0.35)", margin: 0 }}>© 2026 Jewish Education Fund of America. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "about": return <AboutPage />;
      case "contact": return <ContactPage />;
      case "register": return <RegisterPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: COLORS.cream }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        ::selection { background: rgba(201,168,76,0.3); }
        input:focus, textarea:focus, select:focus { border-color: ${COLORS.gold} !important; box-shadow: 0 0 0 3px rgba(201,168,76,0.1); }
        button:hover { opacity: 0.92; }
        @keyframes float { 0% { transform: translateY(0); } 100% { transform: translateY(-6px); } }
        @media (max-width: 700px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }
        @media (min-width: 701px) { .mobile-nav { display: none !important; } }
      `}</style>
      <Nav page={page} setPage={setPage} />
      {renderPage()}
      <Footer setPage={setPage} />
    </div>
  );
}
