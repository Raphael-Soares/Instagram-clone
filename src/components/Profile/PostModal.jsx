import {StyleSheet, Text, View, Modal, Image} from "react-native";
import React from "react";

function PostModal({showModal, setShowModal, post}) {
    return (
        <Modal
            visible={showModal}
            transparent={true}
            onRequestClose={() => setShowModal(false)}
            style={styles.modal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image
                        uri={{
                            uri: `https://picsum.photos/id/87/1000`,
                        }}
                        style={styles.image}
                    />
                </View>
            </View>
        </Modal>
    );
}

export default PostModal;
const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    container: {
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
    },
});
