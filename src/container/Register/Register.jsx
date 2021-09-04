import React from 'react'

export default function Register() {
    return (
        <div>
              <form onSubmit="">
            <li>
                <input name="taikhoan"
                onChange=""
                type="text" className="text"
                 defaultValue="taikhoan"
                  />
            </li>
            <li>
                <input name="matkhau" 
                onChange=""
                 type="password"
                //  autoComplete="current-password"
                 defaultValue="matkhau" />
            </li>
            <li>
                <input name="email" 
                onChange=""
                 type="email"
                //  autoComplete="current-password"
                 placeholder="email" />
            </li>
            <li>
                <input name="soDt" 
                onChange=""
                 type="text"
                //  autoComplete="current-password"
                 placeholder="soDt" />
            </li> 
             <li>
                <input name="maNhom" 
                onChange=""
                 type="maNhom"
                //  autoComplete="current-password"
                 placeholder="maNhom" />
            </li> 
             <li>
                <input name="hoTen" 
                onChange=""
                 type="text"
                //  autoComplete="current-password"
                 placeholder="hoTen" />
            </li>
            <div className="submit">
                <button type="submit">DN</button>
            </div>
        </form>
            
        </div>
    )
}
