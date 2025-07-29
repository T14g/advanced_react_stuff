import { includeUpdatableUser } from "./include-updatable-user";

export const UserInfoForm = includeUpdatableUser(({ user, onChangeUser, onPostUser, onResetUser }) => {
    return user ? (
        <form onSubmit={e => {
            e.preventDefault();
            onPostUser();
        }}>
            <label>
                Name: {user.name}
                <input
                    value={user.name}
                    onChange={e => onChangeUser({ name: e.target.value })}
                />
            </label>
            <label>
                Age:
                <input
                    type="number"
                    value={user.age}
                    onChange={e => onChangeUser({ age: Number(e.target.value) })}
                />
            </label>
            <label>
                Country:
                <input
                    value={user.country}
                    onChange={e => onChangeUser({ country: e.target.value })}
                />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={onResetUser}>Reset</button>
        </form>
    ) : (<div>Loading...</div>)
}, 3);



