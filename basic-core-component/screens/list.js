import { useState } from "react";
import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Pressable,
    Modal,
    Button,
} from "react-native";

// Dummmy Data (Array of Object)
const datas = [
    {
        id: 1,
        title:
            "Telkom Indonesia Gelar Acara Site Visit Implementasi Digital Culture di Telkom University Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/telkom-indonesia-7g41cvdgogl9rhsj4xajruxo4gwvtple82g3pv6nyhc.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 2,
        title: "Tel-U Surabaya Gelar Sosialisasi Bandung Techno Park",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/kekayaan-intelektual-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 3,
        title:
            "Soft Launching dan Pengenalan Laboratorium Motion di Telkom University Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/motion-capture-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 4,
        title: "Tingkatkan Kualitas Pengelolaan Jurnal Ilmiah: Telkom University Surabaya Gelar Workshop Migrasi Web Jurnal",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/05/workshop-migrasi-web-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 5,
        title:
            "Menggali Potensi Desa: Telkom University Surabaya Mendukung UMKM di Tambak Kalisogo",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Telkom-University-Surabaya-2-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 6,
        title:
            "Telkom University Surabaya Hadirkan Inovasi Pengganti Bantalan Roda Semi Otonom Tank Leopard berbasis Electric Forklift Khusus untuk Penguatan Alutsista TNI",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/tank-leopard-7dnkdoqfkgh7et7l6q0j1odu6ovt6cavmgnig3e1368.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 7,
        title: "Sosialisasi PKM 2024 Bersama Tim Pemenangan Tel-U Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/pkm-2024-1-1200x600.jpeg?lossy=2&strip=1&webp=1",
    },
    {
        id: 8,
        title:
            "Transformasi Digital Al-Barra Studio Melalui Pembuatan Website oleh Institut Teknologi Telkom Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/11/transformasi-digital.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 9,
        title: "Program Pengabdian Masyarakat Telkom University Surabaya Bantu UMKM Desa Panjunan Go Digital dan Raih Pasar Internasional",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/09/umkm-go-digital-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 10,
        title:
            "Workshop Social Media Marketing dari INDIBIZ Memberdayakan Pedagang Lokal",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/07/social-media-marketing-1-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
];

// Functional Component
const List = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);

    // Fungsi untuk menampilkan modal dan menyimpan item yang dipilih
    const handlePressItem = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };
    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
        return (
            <Pressable
                style={styles.view}
                onPress={() => handlePressItem(item)}
            >
                <View>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </Pressable>
        );
    };

    return (
        <View>
            <FlatList
                data={datas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            {selectedItem && (
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Image source={{ uri: selectedItem.image }} style={styles.modalImage} />
                            <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                            <Button title="Close" onPress={() => setModalVisible(false)} />
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    view: {
        padding: 15,
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
    },
    image: {
        height: 200,
        width: null,
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        margin: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    modalImage: {
        width: 300,
        height: 200,
    },
    modalTitle: {
        fontSize: 20,
        marginVertical: 15,
        textAlign: "center",
    },
});

export default List;

