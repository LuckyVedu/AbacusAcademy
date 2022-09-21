import '../../App.css';
const HomeItem = props => {
    const{updateData} = props

    const {id, image_url, topic, title, avatar_url, author} = updateData

    return(
        <div className='box-showdow'>
            <img className="item-image" height="150px" width="250px" src={image_url} alt={`item${id}`} />
            <div>
                <p>{topic}</p>
                <p>{title}</p>
            <div>
                <img src={avatar_url} height="40px" width="40px" className="img-author"></img>
                <p>{author}</p>
            </div>
            </div>
        </div>
    )
}

export default HomeItem