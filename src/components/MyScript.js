import React, { useState } from "react";
import Typist from "react-typist";
import MyModal from "./MyModal";
import "./MyScript.css";

const MyScript = () => {
  const [playing, setPlaying] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [hack, setHack] = useState(true);

  const [audio1] = useState(new Audio("/audio/keyboard2.mp3"));
  const [audio2] = useState(new Audio("/audio/keyboard3.mp3"));
  const [audio3] = useState(new Audio("/audio/keyboard4.mp3"));
  const [audio4] = useState(new Audio("/audio/keyboard5.mp3"));
  const [audio5] = useState(new Audio("/audio/keyboard6.mp3"));
  const [audio6] = useState(new Audio("/audio/keyboard7.mp3"));
  const [audioEnter] = useState(new Audio("/audio/enter.mp3"));
  const [audioSpace] = useState(new Audio("/audio/space.mp3"));
  const [backsound] = useState(new Audio("/audio/backsound.mp3"));

  let date = new Date().getFullYear();

  const handle = () => {
    setPlaying(true);
    setShowModal(false);
  };

  const clearTyped = () => {
    if (playing) {
      backsound.play();
      backsound.loop = true;
    }
    setTimeout(() => {
      setHack(false);
    }, 2000);
  };

  const clearTyped2 = () => {
    backsound.loop = false;
  };

  const everyTime = (character, charIdx) => {
    if (character === " ") {
      audioSpace.play();
      audioSpace.volume = 0.8;
    }
    const audios = [audio1, audio2, audio3, audio4, audio5, audio6];
    let random = Math.floor(Math.random() * audios.length);
    audios[random].play();
    audios[random].volume = 0.8;
  };

  const everyLine = line => {
    console.log(line);
    if (line !== "⏰" && line !== "Terimakasih.") {
      audioEnter.play();
    }
  };

  return (
    <>
      {showModal ? (
        <MyModal>
          <div className="content">
            <div className="head">
              <h1>
                INI KADO SEDERHANA DARI KU UNTUK MU DIHARI ULANG TAHUN MU, MAU
                LIAT ?
              </h1>
            </div>
            <div className="body">
              <div className="select" onClick={handle}>
                YES
              </div>
              <h1>OR</h1>
              <div className="select" onClick={handle}>
                YES
              </div>
            </div>
            <div className="footer">
              <h1>
                BY &copy; <strong>Pramudya Diva Alamsyah</strong>
                {date}
              </h1>
            </div>
          </div>
        </MyModal>
      ) : (
        <>
          <div className="container">
            {hack ? (
              <div className="hackType">
                <Typist
                  avgTypingDelay={1}
                  cursor={{
                    show: true,
                    blink: true,
                    hideWhenDone: false,
                  }}
                  onTypingDone={clearTyped}
                >
                  ~ Please a wait . . . . . . . . . . . . . . .
                  <Typist.Delay ms={2000} />
                  <br />
                  ~ Confirmation ID . . . . . . . . . . . . . . .
                  <br />
                  <Typist.Delay ms={2000} />~ ID IS "
                  <span className="nameId">RIA NURMALASARIS</span>" CONFIRMATION
                  . . . . . . . . . . . . . . .
                  <br />
                  ~ ID has been verified
                  <br />
                  <Typist.Delay ms={2000} />
                  ~ Terimakasih Sudah Datang Kesini <br />
                  <h1>LOADING FOR ACTION . . . </h1>
                  <Typist.Delay ms={3000} />
                </Typist>
              </div>
            ) : (
              <Typist
                className="isiType"
                avgTypingDelay={120}
                cursor={{
                  show: true,
                  blink: true,
                  hideWhenDone: false,
                  element: false,
                }}
                onTypingDone={clearTyped2}
                onCharacterTyped={everyTime}
                onLineTyped={everyLine}
              >
                <div>
                  <h1 className="judul">
                    Selamat Ulang Tahun Sayang
                    <br />
                    ===========
                  </h1>
                  <Typist.Delay ms={1000} />
                  <br />
                  Entah apa yang harus aku tuangkan ke dalam halaman web
                  sederhana ini, <Typist.Delay ms={1000} />
                  <br />
                  Sekalipun ada goresan tinta dan syair yang indah, namun
                  indahnya tidak bisa mengalahkan indahnya rasaku ini kepadamu.
                  <Typist.Delay ms={1000} />
                  <br />
                  <br />
                  Ada banyak hal yang mungkin tak kamu ketahui tentang ku.
                  <br />
                  <Typist.Delay ms={1000} />
                  Aku hanya ingin mengucapkan Selamat Ulang Tahun sayang.
                  <br />
                  <br />
                  <Typist.Delay ms={1000} />
                  Selamat Ulang Tahun, semoga sukses, semoga panjang umur,
                  <br /> semoga tuhan mempermudahkan jalan mu dan semoga lekas
                  bertemu.
                  <br />
                  <br />
                  <Typist.Delay ms={1000} />
                  Aku sangat bersyukur karena tuhan mengizinkan kita untuk
                  mengenal.
                  <br />
                  <br />
                  <Typist.Delay ms={2000} />
                  Terimakasih banyak atas waktu yang sudah kamu berikan kepada
                  ku, meskipun hanya sebentar... <Typist.Delay ms={1000} />
                  tetapi kamu telah memberikan warna di setiap hari – hariku.
                  <br />
                  <br />
                  <Typist.Delay ms={2000} />
                  Terimakasih karena Sudah Melihat Kado Ulang Tahun yang
                  sederhana ini. 😄😄😄
                  <br />
                  <br />
                  <span className="ttd">~~~ Untuk Ria Nurmalasari ~~~</span>
                </div>
              </Typist>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MyScript;
