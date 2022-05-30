import React from "react";

const PostUser = (props) => {
    return(
        <tr className='hover'>
            <td class="border border-slate-700">{props.nama}</td>
            <td class="border border-slate-700">{props.email}</td>
            <td class="border border-slate-700">{props.password}</td>
            <td class="border border-slate-700">
                <button className="btn btn-error px-8" 
                onClick={() => props.hapusUser(props.idUser)} >Hapus</button>
            </td>
        </tr>
    )
}

export default PostUser;