import {StyleSheet, Text, View, FlatList, Dimensions, Button, Modal} from "react-native";
import {useState} from "react";

import Post from "./Post";
import PostModal from "./PostModal";

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const {width, height} = Dimensions.get("window");
const posts = [
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "John Doe",
        likes: 100,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Mary Key",
        likes: 200,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Maria Eduarda",
        likes: 300,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "John Doe",
        likes: 100,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Mary Key",
        likes: 200,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Maria Eduarda",
        likes: 300,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "John Doe",
        likes: 100,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Mary Key",
        likes: 200,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Maria Eduarda",
        likes: 300,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "John Doe",
        likes: 100,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Mary Key",
        likes: 200,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
    {
        id: generateNumber(1, 999),
        image: `https://picsum.photos/id/${generateNumber(0, 300)}/1000`,
        name: "Maria Eduarda",
        likes: 300,
        caption: "This is a caption",
        posted: "6 minutes ago",
    },
];

function PostsGrid() {
    const [showModal, setShowModal] = useState(false);
    const [post, setPost] = useState({});

    function handleShowModal(post) {
        setPost(post);
        setShowModal(true);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(post) => post.id}
                renderItem={({item}) => (
                    <Post
                        item={item}
                        setShowModal={setShowModal}
                        handleShowModal={handleShowModal}
                    />
                )}
                numColumns={3}
                key={3}
            />
            {showModal && post && (
                <PostModal post={post} setShowModal={setShowModal} showModal={showModal} />
            )}
        </View>
    );
}

export default PostsGrid;
const styles = StyleSheet.create({
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
        borderRadius: 20,
    },
});
