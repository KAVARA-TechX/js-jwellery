import React, { useState } from "react";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const PinCodeModal = ({ children }) =>{
    const { user } = useSelector((state) => ({ ...state }));
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    if (user && user.token) {
      setModalVisible(true);
    } else {
        setModalVisible(true);
    //   history.push({
    //       pathname: "/login",
    //       state:{ from: `/product/${slug}`},
    //   });
    }
  };
    return(
        <div>
      <div onClick={handleModal}>
        <p style={{cursor:'pointer'}}>Check Delivery Date</p>
      </div>
      <Modal
        title="Check for availability"
        centered
        visible={modalVisible}
        onOk={() => {
          setModalVisible(false);
          toast.success("Thanks for your review. It will apper soon");
        }}
        onCancel={() => setModalVisible(false)}
      >{children}
      </Modal>
      </div>
    );
}

export default PinCodeModal;