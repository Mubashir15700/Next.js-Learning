import Link from "next/link";

const UsersList = ({
  users,
  loading,
}: {
  users: { name: string; id: number }[];
  loading: boolean;
}) => {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : users.length ? (
        users.map((user, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>
              {user.id}. {user.name}
            </p>
            <Link href={`/users/${user.id}?name=${user.name}`}>View</Link>
          </div>
        ))
      ) : (
        <p>No users</p>
      )}
    </div>
  );
};

export default UsersList;
