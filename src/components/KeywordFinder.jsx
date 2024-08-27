import { useLayoutEffect, useRef, useState } from "react";
import "./KeywordFinder.css";
import Modal from "./Modal/Modal";
import Data from '../components/data/Data'

const KeyWordFinder = () => {
    const [Text, setText] = useState("");
    const [matchCount, setMatchCount] = useState(0);
    const [matchIndex, setMatchIndex] = useState(-1);
    const [showInput, setShowInput] = useState(false);

    const htmlRef = useRef(null);
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);

    useLayoutEffect(() => {
        document.addEventListener("keydown", detectKeydown, true);
        const html = htmlRef.current.innerHTML;
        setText(html);
        return () => {
            document.removeEventListener("keydown", detectKeydown, true);
        };
    }, []);

    const detectKeydown = (e) => {
        if (e.key === "f" && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            setShowInput((prev) => !prev);
        }
    };

    const handleInput = (e) => {
        setMatchIndex(-1);
        var keyword = e.target.value.replace(/[.<]/g, "");
        const textEmpty = keyword === "" || keyword == null;
        if (textEmpty) {
            htmlRef.current.innerHTML = Text;
            setMatchCount(0);
            nextButtonRef.current.disabled = true;
            nextButtonRef.current.classList.replace("btn_active", "btn_inactive");
            prevButtonRef.current.disabled = true;
            prevButtonRef.current.classList.replace("btn_active", "btn_inactive");
            return;
        }
        const regex = new RegExp(`(?![^<>]*>)(${keyword})`, "gi");
        const highlighted = Text.replace(regex, (match, index) => {
            return `<span class="high_light">${match}</span>`;
        });
        htmlRef.current.innerHTML = highlighted;

        if (regex.source !== "(?:)") {
            const matches = htmlRef.current.querySelectorAll(".high_light");
            const count = matches.length;
            setMatchCount(count);
            if (count > 0) {
                if (count <= 1) {
                    prevButtonRef.current.classList.replace("btn_active", "btn_inactive");
                } else if (count > 1) {
                    nextButtonRef.current.classList.replace("btn_inactive", "btn_active");
                    prevButtonRef.current.classList.replace("btn_inactive", "btn_active");
                }
                nextButtonRef.current.disabled = count <= 1;
                prevButtonRef.current.disabled = count <= 1;
            } else {
                nextButtonRef.current.disabled = true;
                nextButtonRef.current.classList.replace("btn_active", "btn_inactive");

                prevButtonRef.current.disabled = true;
                prevButtonRef.current.classList.replace("btn_active", "btn_inactive");
                setMatchIndex(0);
            }
        } else {
            htmlRef.current.innerHTML = Text;
            setMatchCount(0);
            nextButtonRef.current.disabled = true;
            nextButtonRef.current.classList.replace("btn_inactive", "btn_active");
            prevButtonRef.current.disabled = true;
            prevButtonRef.current.classList.replace("btn_inactive", "btn_active");
            setMatchIndex(-1);
        }
    };

    const handleNextClick = () => {
        const matches = htmlRef.current.querySelectorAll(".high_light");
        const count = matches.length;
        if (count === 0) {
            return;
        }
        const nextIndex = matchIndex >= count - 1 ? 0 : matchIndex + 1;
        const prevIndex = matchIndex <= 0 ? count - 1 : matchIndex - 1;
        matches[nextIndex].classList.add("high_light1");
        if (matchIndex != -1) matches[matchIndex].classList.remove("high_light1");
        setMatchIndex(nextIndex);
        matches[nextIndex].scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const handlePrevClick = () => {
        const matches = htmlRef.current.querySelectorAll(".high_light");
        const count = matches.length;
        if (count === 0 || count === 1) {
            return;
        }
        const nextIndex = matchIndex >= count - 1 ? 0 : matchIndex + 1;
        const prevIndex = matchIndex <= 0 ? count - 1 : matchIndex - 1;
        matches[prevIndex].classList.add("high_light1");
        matches[matchIndex].classList.remove("high_light1");
        setMatchIndex(prevIndex);
        matches[nextIndex].scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const handleCloseBtn = () => {
        setShowInput(false);
        htmlRef.current.innerHTML = Text;
        setMatchCount(0);
        setMatchIndex(-1);
    };

    return (
        <div>
            {showInput && (
                <Modal
                    handleCloseBtn={handleCloseBtn}
                    onchange={handleInput}
                    nxtBtnRef={nextButtonRef}
                    nxtBtnClick={handleNextClick}
                    prevRef={prevButtonRef}
                    prevBtnClick={handlePrevClick}
                    matchIndex={matchIndex}
                    count={matchCount}
                />
            )}
            <div className="container" ref={htmlRef}>
                <Data />
            </div>
        </div>
    );
};

export default KeyWordFinder;
