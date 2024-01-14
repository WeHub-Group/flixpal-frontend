/* eslint-disable react/prop-types */

const NotFound = ({ fullscreen }) => {
    return (
        <div className={
            fullscreen ?
                'w-screen h-screen bg-screen bg-purple flex justify-center items-center' :
                'w-full h-full bg-screen bg-purple flex justify-center items-center'
        }>
            <p>404 - Not found</p>
        </div>
    )
}

export default NotFound
