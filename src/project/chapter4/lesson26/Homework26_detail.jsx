import { useEffect, useState } from "react";
import { getUserWithPaginate } from "../../utils/apiService";

const Homework26 = () => {
    const [users, setUsers] = useState([]);
    const [showImages, setShowImages] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await getUserWithPaginate(1, 3);
            if (res && res.data) {
                setUsers(res.data);
            }
        };
        fetchUsers();
    }, []);

    const toggleImage = (id) => {
        setShowImages(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div style={{ maxWidth: 400, margin: "0 auto" }}>
            <h3>Danh sách Users</h3>
            {users.length === 0 && <div>Loading...</div>}
            {users.map(user => (
                <div key={user.id} style={{
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    padding: 12,
                    marginBottom: 12,
                    background: "#f9f9f9"
                }}>
                    <div><b>Name:</b> {user.name}</div>
                    <div><b>Email:</b> {user.email}</div>
                    <button
                        style={{ margin: "8px 0" }}
                        onClick={() => toggleImage(user.id)}
                    >
                        {showImages[user.id] ? "Hide" : "Show"} Image
                    </button>
                    {showImages[user.id] && user.image && (
                        <div>
                            <img
                                src={`data:image/png;base64,${user.image}`}
                                alt="avatar"
                                style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Homework26;