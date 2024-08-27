import { useEffect, useRef } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import "./Modal.css";
const Modal = ({
    onchange,
    nxtBtnRef,
    nxtBtnClick,
    prevRef,
    prevBtnClick,
    count,
    matchIndex,
    clearBtnClick,
    handleCloseBtn,
}) => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="modal_container">
            <div className="modal_body">
                <div>
                    <input type="text" ref={inputRef} onChange={onchange} />
                </div>
                <div className="count">
                    <p>
                        {matchIndex + 1}/{count}
                    </p>
                </div>
                <div className="btn">
                    <span className="btn_inactive" ref={prevRef} onClick={prevBtnClick}>
                        <BsChevronUp />
                    </span>
                    <span className="btn_inactive" ref={nxtBtnRef} onClick={nxtBtnClick}>
                        <BsChevronDown />
                    </span>
                    <span className="close_btn" onClick={handleCloseBtn}>
                        <IoCloseOutline />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Modal;
