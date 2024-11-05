"use client";
import AppButton from "@/components/button";
import Gallery from "@/components/gallery";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const InvitationPage = () => {
  const accountNumber = "7730551651";
  const accountNumberRatih = "054021500394";
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const searchParams = useSearchParams();
  const toParam = searchParams.get("to");

  const handleCopy = () => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        alert("Nomor rekening berhasil disalin!");
      })
      .catch((err) => {
        console.error("Gagal menyalin teks: ", err);
      });
  };

  const handleCopyRatih = () => {
    navigator.clipboard
      .writeText(accountNumberRatih)
      .then(() => {
        alert("Nomor rekening berhasil disalin!");
      })
      .catch((err) => {
        console.error("Gagal menyalin teks: ", err);
      });
  };

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  return (
    <div className={`${!isPopupVisible ? "overflow-hidden" : "py-20"}`}>
      {!isPopupVisible && (
        <div
          className={`bg-primary h-screen w-full flex flex-col items-center justify-center py-28 px-12 gap-10`}
        >
          <Image
            src="/cover/main.jpg"
            className="w-fit h-fit"
            alt="logo"
            width={1000}
            height={1000}
          />
          <div className="flex flex-col">
            <p className="font-yrt text-center text-text">The Wedding of</p>
            <Image
              src="/svg/name.svg"
              className="w-42"
              alt="logo"
              width={1000}
              height={1000}
            />
            <p className="font-yrt text-center text-text">
              special invitation to
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-yrt text-center text-text">
              {toParam ? toParam : "-"}
            </p>
            <p className="text-xs text-text font-texturina text-center">
              Kami mengundang anda untuk hadir pada acara Pernikahan putra-putri
              Kami.
            </p>
            <br />
            <AppButton text="Open Invitation" onClick={handleOpenPopup} />
          </div>
        </div>
      )}

      {isPopupVisible && (
        <div className="bg-primary w-full h-full flex flex-col items-center justify-center gap-10">
          <div className="px-8 flex flex-col gap-10 justify-center items-center">
            <div className="w-full flex flex-row justify-start items-center ">
              <Image
                src="/svg/title.svg"
                alt="title"
                width={1000}
                height={1000}
              />
            </div>

            <div className="w-full flex flex-row justify-between items-center gap-x-10">
              <Image
                src="/svg/name2.svg"
                className="w-1/2"
                alt="name2"
                width={1000}
                height={1000}
              />
              <Image
                src="/svg/icon_1.svg"
                className="w-1/4"
                alt="icon_1"
                width={1000}
                height={1000}
              />
            </div>

            <div className="w-full flex flex-row justify-start items-center">
              <p className="text-xs text-text font-texturina">
                We Invite you to celebrate our wedding
              </p>
            </div>

            <div className="w-full flex flex-row justify-start items-center">
              <Image
                src="/svg/date.svg"
                className="w-1/2"
                alt="date"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div className="bg-light w-full h-full flex flex-col items-center justify-center py- px-6 gap-10">
            <div className="w-full flex flex-row justify-end items-center -mt-28">
              <Image
                src="/svg/icon3.svg"
                className="w-1/3"
                alt="flower"
                width={1000}
                height={1000}
              />
            </div>

            <div>
              <Image
                src="/svg/bridge.svg"
                className="w-full"
                alt="bridge"
                width={1000}
                height={1000}
              />
            </div>

            <div className="bg-primary w-full h-full flex flex-row justify-center items-center gap-5 p-5">
              <div className="flex flex-col gap-3">
                <div>
                  <Image
                    src="/svg/wayan.svg"
                    alt="wayan"
                    width={1000}
                    height={1000}
                  />
                </div>

                <div className="font-texturina text-xxs text-text">
                  <p>
                    Putra Pertama dari Pasangan
                    <br />
                    I Ketut Sukarmen
                    <br /> & Ni Made Gembini
                  </p>
                </div>

                <div className="">
                  <Image
                    src="/svg/matahari1.svg"
                    className="w-1/3"
                    alt="matahari1"
                    width={1000}
                    height={1000}
                  />
                </div>

                <div>
                  <AppButton
                    icon={
                      <>
                        <Image
                          src="/svg/instagram.svg"
                          className="w-3"
                          alt="wayan"
                          width={20}
                          height={20}
                        />
                      </>
                    }
                    textSize="text-xxs"
                    textColor="text-text"
                    text="@ANUGRAH.WY"
                    link="https://www.instagram.com/anugrah.wy/"
                  />
                </div>
              </div>
              <div>
                <Image
                  src="/cover/person1.jpg"
                  alt="person1"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div className="bg-primary w-full h-full flex flex-row justify-center items-center gap-5 p-5">
              <div>
                <Image
                  src="/cover/person2.jpg"
                  alt="person2"
                  width={1000}
                  height={1000}
                />
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <Image
                    src="/svg/ratih.svg"
                    alt="ratih"
                    width={1000}
                    height={1000}
                  />
                </div>

                <div className="font-texturina text-xxs text-text">
                  <p>
                    Putri Pertama dari Pasangan
                    <br />
                    I Nyoman Kariana, S.Sos.
                    <br /> & Ni Made Sudewi Ariasih
                  </p>
                </div>

                <div className="">
                  <Image
                    src="/svg/bulan.svg"
                    className="w-1/3"
                    alt="bulan"
                    width={1000}
                    height={1000}
                  />
                </div>

                <div>
                  <AppButton
                    icon={
                      <>
                        <Image
                          src="/svg/instagram.svg"
                          className="w-3"
                          alt="wayan"
                          width={20}
                          height={20}
                        />
                      </>
                    }
                    textSize="text-xxs"
                    textColor="text-text"
                    text="@RATIHSAPTANDARI"
                    link="https://www.instagram.com/ratihsaptandari/"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-3 mt-10">
              <p className="text-3xl font-bold text-secondary font-yrt tracking-wide">
                RG VEDA X85 42
              </p>

              <p className="px-10 text-xs text-secondary leading-4 text-center font-texturina">
                Ya Tuhanku Yang Maha Pengasih, anugrahkanlah kepada pasangan ini
                senantiasa kebahagiaan, kesehatan, tetap bersatu dan tidak
                pernah terpisahkan, panjang umur dan tinggal di rumah yang penuh
                kegembiraan bersama seluruh keturunannya{" "}
              </p>
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <iframe
                className="w-full"
                width="1000"
                height="200"
                src="https://www.youtube.com/embed/XjbhtMS3EfU?si=_LW5aZJHBMEaWaQl"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image
                src="/svg/ar_icon.svg"
                className="w-1/6"
                alt="ar_icon"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div className="bg-primary w-full h-full flex flex-col items-center justify-center py-10 px-6 gap-5">
            <div className="w-full flex flex-row justify-center items-center">
              <Image
                src="/svg/om.svg"
                className="w-1/4"
                alt="om"
                width={1000}
                height={1000}
              />
            </div>

            <div>
              <p className="text-xs text-secondary text-center font-texturina">
                Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa/ Tuhan
                Yang Maha Esa, kami bermaksud mengundang Bapak/Ibu/Saudara/i,
                pada Acara Pawiwahan (Pernikahan) putra & putri kami, yang akan
                dilaksanakan pada :
              </p>
            </div>

            <Image
              src="/svg/garis.svg"
              className="w-full"
              alt="garis"
              width={1000}
              height={1000}
            />

            <div>
              <p className="text-xs text-secondary text-center font-texturina">
                RABU <br />
                13/November /2024
                <br />
                <br />
                PUKUL
                <br />
                13.00 WITA - Selesai
              </p>
            </div>

            <Image
              src="/svg/garis.svg"
              className="w-full"
              alt="garis"
              width={1000}
              height={1000}
            />

            <div className="flex flex-col justify-center items-center gap-3">
              <p className="text-sm text-secondary text-center font-texturina">
                BERTEMPAT DI
                <br />
                Br. Jungut, Ds.Batuan, Sukawati
              </p>

              <AppButton
                icon={
                  <>
                    <Image
                      src="/svg/map.svg"
                      className="w-fit h-4"
                      alt="map"
                      width={100}
                      height={100}
                    />
                  </>
                }
                textColor="text-white"
                text="GOOGLE MAPS"
                link="/invitation"
              />
            </div>

            <Image
              src="/svg/garis.svg"
              className="w-full"
              alt="garis"
              width={1000}
              height={1000}
            />

            <div>
              <p className="text-xs text-secondary text-center font-texturina">
                Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
                Bapak/Ibu/Saudara/i, berkenan hadir untuk memberikan doa restu
                kepada putra - putri kami.
                <br />
                <br />
                Atas kehadiran dan doa restunya kami ucapkan terima kasih.
              </p>
            </div>

            <div className="w-full mt-5 flex flex-row justify-center items-center">
              <Image
                src="/svg/santi.svg"
                className="w-1/2"
                alt="santi"
                width={1000}
                height={1000}
              />
            </div>

            <div>
              <p className="text-xs text-secondary text-center font-texturina">
                KAMI YANG BERBAHAGIA <br />
                Kel. I Ketut Sukarmen
                <br />
                <br />
                &
                <br />
                <br />
                Kel. I Nyoman Kariana, S.Sos.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image
                src="/svg/ar2024.svg"
                className="w-1/6"
                alt="ar2024"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div className="bg-light w-full h-full flex flex-col items-center justify-center py-10 px-6 gap-10">
            <div className="w-full flex flex-row justify-center items-center">
              <Image
                src="/svg/gallery.svg"
                className="w-1/2"
                alt="om"
                width={1000}
                height={1000}
              />
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <iframe
                className="w-full"
                width="1000"
                height="200"
                src="https://www.youtube.com/embed/569tpvirMqE?si=bXGiqQR5c2Qnkg1E"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>

            <div className="container mx-auto">
              <Gallery />
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <iframe
                className="w-full"
                width="1000"
                height="200"
                src="https://www.youtube.com/embed/tXYUKYGzxDA?si=enO868U9xDIg87L8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs text-secondary text-center font-texturina">
                Photo & Video by :
              </p>
              <AppButton
                icon={
                  <>
                    <Image
                      src="/svg/instagram.svg"
                      className="w-3"
                      alt="wayan"
                      width={20}
                      height={20}
                    />
                  </>
                }
                textColor="text-text"
                text="@askararupa_baturan"
                link="https://www.instagram.com/askararupa_baturan/"
              />
            </div>
          </div>

          <div className="bg-primary w-full h-full flex flex-col items-center justify-center py-10 px-6 gap-5">
            <div>
              <Image
                src="/svg/wedding.svg"
                className="w-full"
                alt="wedding"
                width={1000}
                height={1000}
              />
            </div>

            <div className="flex flex-col gap-y-5">
              <Image
                src="/svg/rekening.svg"
                className="w-full"
                alt="wedding"
                width={1000}
                height={1000}
              />

              <div
                onClick={handleCopy}
                className="bg-secondary gap-2 cursor-pointer flex flex-row justify-between items-center px-4 py-2 rounded-sm text-white"
              >
                <Image
                  src="/svg/copas.svg"
                  className="w-4"
                  alt="bca"
                  width={100}
                  height={100}
                />
                <p className="w-full text-center text-sm font-bold font-texturina">
                  SALIN NOMOR REKENING
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <Image
                src="/svg/rek_ratih.svg"
                className="w-full"
                alt="wedding"
                width={1000}
                height={1000}
              />

              <div
                onClick={handleCopyRatih}
                className="bg-secondary gap-2 cursor-pointer flex flex-row justify-between items-center px-4 py-2 rounded-sm text-white"
              >
                <Image
                  src="/svg/copas.svg"
                  className="w-4"
                  alt="bca"
                  width={100}
                  height={100}
                />
                <p className="w-full text-center text-sm font-bold font-texturina">
                  SALIN NOMOR REKENING
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="https://cmpt-rules.com" className="text-center">
              <p className="text-center font-texturina text-text">
                Design by : cmpt-rules.com
              </p>
            </Link>
            <Link href="https://widitech.com" className="text-center">
              <p className="text-center font-texturina text-text">
                Power by : widitech.com
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvitationPage;
