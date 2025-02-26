"use client";

import Countdown from "@/components/Countdown";
import PrizeCarousel from "@/components/PrizeCarousel";
import Link from "next/link";
import buttonStyles from "@/styles/buttons.module.scss";
import backgroundStyles from "@/styles/background.module.scss";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
   <div>
    <div className={backgroundStyles["main-section"]}>
      <Countdown />
      <PrizeCarousel />
      <div className={backgroundStyles["fresno-logo-container"]}>
        <img
          src="/images/circleLogo2x.png"
          alt="Fresno State Logo"
          className={backgroundStyles["fresno-logo-image"]}
        />
      </div>
      <div className={backgroundStyles["pepsi-logo-container"]}>
        <img
          src="/images/pepsiLogo2x.png"
          alt="Pepsi Logo"
          className={backgroundStyles["pepsi-logo-image"]}
        />
      </div>
      <div className={backgroundStyles["next-contest-container"]}>
        <p className={backgroundStyles["next-contest-text"]}>
          OUR NEXT CONTEST:
        </p>
        <p className={backgroundStyles["next-contest-hashtag"]}>
          #LOREMIPSUMDOLOR
        </p>
      </div>
      <div className={backgroundStyles["title-container"]}>
        <p className={backgroundStyles["title-text"]}>
          FAN MOMENTS
        </p>
      </div>
      <div className={backgroundStyles["subtitle-container"]}>
        <p className={backgroundStyles["subtitle-text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra congue libero in finibus. Integer nulla eros, tempus.
        </p>
      </div>
      <div className={backgroundStyles["step-one-container"]}>
        <p className={backgroundStyles["step-one-text"]}>
          Step one id libero imperdiet, lacinia arcu ac, ullamcorper ligula. Quisque ut venenatis nulla. 
          Nulla est magna, gravida at enim eget, imperdiet lobortis.
        </p>
      </div>
      <div className={backgroundStyles["step-two-container"]}>
        <p className={backgroundStyles["step-two-text"]}>
        Step two pulvinar, enim lacinia congue lacinia, enim quam imperdiet nisi, vel egestas tellus nisi at ex. Phasellus euismod pellentesque.
        </p>
      </div>
      <div className={backgroundStyles["sponsor-container"]}>
        <p className={backgroundStyles["sponsor-text"]}>
          PRESENTED BY <span className={backgroundStyles["pepsi-text"]}>PEPSI</span>
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
