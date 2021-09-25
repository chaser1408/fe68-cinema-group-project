import React, { Component } from 'react'

export default class nagination extends Component {
    render() {

        const {postPersPage,totalPosts, paginate, nextpage, prevPage} = this.props;
        const pageNumbers= [];
        
        for(let i=1; i<=Math.ceil(totalPosts/ postPersPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                            <a className="page-item" href="#" onClick={()=> prevPage()} > Previous</a>
                    </li>
                    {pageNumbers.map(num=>(
                        <li className="page-item" key={num}>
                            <a className="page-link" href="#" onClick={()=>paginate(num)}>
                                {num}
                            </a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={()=>nextpage()} >Next</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
