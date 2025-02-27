"use client";

import Countdown from "@/components/Countdown";
import PrizeCarousel from "@/components/PrizeCarousel";
import Link from "next/link";
import buttonStyles from "@/styles/buttons.module.scss";
import backgroundStyles from "@/styles/background.module.scss";
import mainStyles from "@/styles/mainSection.module.scss";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
   <div>
    <div className={mainStyles["main-section"]}>
      <Countdown />
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
      <div className={mainStyles["title-container"]}>
        <p className={mainStyles["title-text"]}>
          FAN MOMENTS
        </p>
      </div>
      <div className={mainStyles["subtitle-container"]}>
        <p className={mainStyles["subtitle-text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra congue libero in finibus. Integer nulla eros, tempus.
        </p>
      </div>
      <PrizeCarousel />
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
      <div className={mainStyles["step-one-container"]}>
        <p className={mainStyles["steps-text"]}>
          Step one id libero imperdiet, lacinia arcu ac, ullamcorper ligula. Quisque ut venenatis nulla. 
          Nulla est magna, gravida at enim eget, imperdiet lobortis.
        </p>
      </div>
      <div className={mainStyles["step-two-container"]}>
        <p className={mainStyles["steps-text"]}>
        Step two pulvinar, enim lacinia congue lacinia, enim quam imperdiet nisi, vel egestas tellus nisi at ex. Phasellus euismod pellentesque.
        </p>
      </div>
      <div className={mainStyles["step-three-container"]}>
        <p className={mainStyles["steps-text"]}>
        Step three sit amet aliquam quam faucibus sed. Proin nec ultricies libero. Vivamus sed urna.
        </p>
      </div>
      <div className={buttonStyles["larger-button-container"]}>
        <Link href="/enterNow">
          <button className={buttonStyles["larger-button"]} onClick={() => router.push("/enterNow")}>
            ENTER NOW
          </button>
        </Link>
      </div>
    </div>
    <div className={backgroundStyles["video-section"]}>
      <h3 className={backgroundStyles["video-caption"]}>
        HEADLINE ABOUT VIDEOS <span className={backgroundStyles["video-caption-red"]}>ALREADY SUBMITTED</span>
      </h3>
      <div className={backgroundStyles["video-container"]}>
        <img src="/images/video1.png" className={backgroundStyles["video-image"]} alt="Image 1" />
        <img src="/images/video2.png" className={backgroundStyles["video-image"]} alt="Image 2" />
        <img src="/images/video3.png" className={backgroundStyles["video-image"]} alt="Image 3" />
        <img src="/images/video4.png" className={backgroundStyles["video-image"]} alt="Image 4" />
        <img src="/images/video5.png" className={backgroundStyles["video-image"]} alt="Image 5" />
      </div>
    </div>
    <div className={backgroundStyles["cta-section"]}>
      <p className={backgroundStyles["cta-header"]}>
        LAST CTA
      </p>
      <p className={backgroundStyles["cta-caption"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Curabitur tellus, pulvinar quis volutpat et,
        mollis vitae ligula.
      </p>
      <Link href="/enterNow">
        <button className={buttonStyles["larger-button"]} onClick={() => router.push("/enterNow")}>
          ENTER NOW
        </button>
      </Link>
    </div>
    <div className={backgroundStyles["footer-section"]}>
      <div className={backgroundStyles["footer-image-container"]}>
        <img
          src="/images/witLogo2x.png"
          alt="Footer Logo"
          className={backgroundStyles["footer-image"]}
        />
      </div>
      <div className={backgroundStyles["copyright-container"]}>
        <p className={backgroundStyles["copyright-text"]}>
          Copyright &copy; 2020 Wit. All rights reserved.
        </p>
      </div>
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
