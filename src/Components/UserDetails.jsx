import React from 'react'

const UserDetails = ({ user }) => {
    return (
        <table className="table table-zebra w-96 mx-auto">
            <tbody>
            <tr>
                <td className="font-bold">ID</td>
                <td>{user.id}</td>
            </tr>
            <tr>
                <td className="font-bold">Nombre</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td className="font-bold">Username</td>
                <td>{user.username}</td>
            </tr>
            <tr>
                <td className="font-bold">Email</td>
                <td>{user.email}</td>
            </tr>
            <tr>
                <td className="font-bold">Teléfono</td>
                <td>{user.phone}</td>
            </tr>
            <tr>
                <td className="font-bold">Website</td>
                <td>{user.website}</td>
            </tr>
            <tr>
                <td className="font-bold">Compañia</td>
                <td>{user.company.name}</td>
            </tr>
            <tr>
                <td className="font-bold">Dirección</td>
                <td>
                {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                </td>
            </tr>
            </tbody>
        </table>
    );
}

export default UserDetails;