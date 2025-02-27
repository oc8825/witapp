/* page.tsx
   Imports styles and uses them to define the features of the landing
   page, within the four sections of mainSection, videoSection,
   ctaSection, and footerSection.
*/

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Countdown from "@/components/Countdown";
import PrizeCarousel from "@/components/PrizeCarousel";
import buttonStyles from "@/styles/buttons.module.scss";
import mainStyles from "@/styles/mainSection.module.scss";
import videoStyles from "@/styles/videoSection.module.scss";
import ctaStyles from "@/styles/ctaSection.module.scss";
import footerStyles from "@/styles/footerSection.module.scss";

export default function Home() {
  const router = useRouter();

  return (
   <div>
    {/* Create all elements in the main-section, including the countdown,
    next contest info, title, subtitle, prize carousel, sponsor info
    steps text, and Enter Now button*/}
    <div className={mainStyles["main-section"]}>
      <Countdown />

      {/* Next contest info */}
      <div className={mainStyles["next-contest-container"]}>
        <div className={mainStyles["fresno-logo-container"]}>
          <img
            src="/images/circleLogo2x.png"
            alt="Fresno State Logo"
            className={mainStyles["fresno-logo-image"]}
          />
        </div>
        <div className={mainStyles["next-contest-text-container"]}>
          <p className={mainStyles["next-contest-text"]}>
            OUR NEXT CONTEST:
          </p>
          <p className={mainStyles["next-contest-hashtag"]}>
            #LOREMIPSUMDOLOR
          </p>
        </div>
      </div>

      {/* Title */}
      <div className={mainStyles["title-container"]}>
        <p className={mainStyles["title-text"]}>
          FAN MOMENTS
        </p>
      </div>

      {/* Subtitle */}
      <div className={mainStyles["subtitle-container"]}>
        <p className={mainStyles["subtitle-text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra congue libero in finibus. Integer nulla eros, tempus.
        </p>
      </div>

      <PrizeCarousel />

      {/* Sponsor info */}
      <div className={mainStyles["sponsor-container"]}>
        <p className={mainStyles["sponsor-text"]}>
          PRESENTED BY<span className={mainStyles["pepsi-text"]}>&nbsp;PEPSI</span>
        </p>
        <img
          src="/images/pepsiLogo2x.png"
          alt="Pepsi Logo"
          className={mainStyles["pepsi-logo-image"]}
        />
      </div>

      {/* Step one text */}
      <div className={mainStyles["step-one-container"]}>
        <p className={mainStyles["steps-text"]}>
          Step one id libero imperdiet, lacinia arcu ac, ullamcorper ligula. Quisque ut venenatis nulla. 
          Nulla est magna, gravida at enim eget, imperdiet lobortis.
        </p>
      </div>

      {/* Step two text */}
      <div className={mainStyles["step-two-container"]}>
        <p className={mainStyles["steps-text"]}>
        Step two pulvinar, enim lacinia congue lacinia, enim quam imperdiet nisi, vel egestas tellus nisi at ex. Phasellus euismod pellentesque.
        </p>
      </div>

      {/* Step three text */}
      <div className={mainStyles["step-three-container"]}>
        <p className={mainStyles["steps-text"]}>
        Step three sit amet aliquam quam faucibus sed. Proin nec ultricies libero. Vivamus sed urna.
        </p>
      </div>

      {/* Enter Now button */}
      <div className={buttonStyles["larger-button-container"]}>
        <Link href="/enterNow">
          <button className={buttonStyles["larger-button"]} onClick={() => router.push("/enterNow")}>
            ENTER NOW
          </button>
        </Link>
      </div>
    </div>

    {/* Create all elements in the video-section, including a caption
    and 5 evenly spaced images */}
    <div className={videoStyles["video-section"]}>
      {/* Caption */}
      <h3 className={videoStyles["video-caption"]}>
        HEADLINE ABOUT VIDEOS <span className={videoStyles["video-caption-red"]}>ALREADY SUBMITTED</span>
      </h3>

      {/* Images */}
      <div className={videoStyles["video-container"]}>
        <img src="/images/video1.png" className={videoStyles["video-image"]} alt="Image 1" />
        <img src="/images/video2.png" className={videoStyles["video-image"]} alt="Image 2" />
        <img src="/images/video3.png" className={videoStyles["video-image"]} alt="Image 3" />
        <img src="/images/video4.png" className={videoStyles["video-image"]} alt="Image 4" />
        <img src="/images/video5.png" className={videoStyles["video-image"]} alt="Image 5" />
      </div>
    </div>

    {/* Create all elements in the cta-section, including a header, body
    text, and another Enter Now button */}
    <div className={ctaStyles["cta-section"]}>
      {/* Header */}
      <p className={ctaStyles["cta-header"]}>
        LAST CTA
      </p>

      {/* Body text */}
      <p className={ctaStyles["cta-caption"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Curabitur tellus, pulvinar quis volutpat et,
        mollis vitae ligula.
      </p>

      {/* Enter Now button */}
      <Link href="/enterNow">
        <button className={buttonStyles["larger-button"]} onClick={() => router.push("/enterNow")}>
          ENTER NOW
        </button>
      </Link>
    </div>

    {/* Create all elements in the footer section, including the WIT
    logo, copyright statement, and buttons to the FAQ, Privacy Policy,
    and Terms of Service Pages */}
    <div className={footerStyles["footer-section"]}>
      {/* WIT logo */}
      <div className={footerStyles["footer-image-container"]}>
        <img
          src="/images/witLogo2x.png"
          alt="Footer Logo"
          className={footerStyles["footer-image"]}
        />
      </div>

      {/* Copyright statment */}
      <div className={footerStyles["copyright-container"]}>
        <p className={footerStyles["copyright-text"]}>
          Copyright &copy; 2020 Wit. All rights reserved.
        </p>
      </div>

      {/* Three buttons, with dividers between them */}
      <div className={buttonStyles["simple-button-container"]}>
        <Link href="/faq">
          <button className={buttonStyles["simple-button"]} onClick={() => router.push("/faq")}>
            FAQ
          </button>
        </Link>
        <span className={buttonStyles["divider"]}>|</span>
        <Link href="/privacyPolicy">
          <button className={buttonStyles["simple-button"]} onClick={() => router.push("/privacyPolicy")}>
            Privacy Policy
          </button>
        </Link>
        <span className={buttonStyles["divider"]}>|</span>
        <Link href="/termsOfService">
          <button className={buttonStyles["simple-button"]} onClick={() => router.push("/termsOfService")}>
            Terms of Service
          </button>
        </Link>
      </div>
    </div>

  </div>
    
  );
}
