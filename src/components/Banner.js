import '../styles/Banner.css'

function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner

// import '../styles/Banner.css'
// import logo from '../assets/logo.png'
// import Recommendation from './Recommendation'

// function Banner() {
//     const title = 'La maison jungle'
//     return (
//         <div className='lmj-banner'>
//             <div className='lmj-banner'>
//                 <img src={logo} alt='La maison jungle' 
//     className='lmj-logo' />
//                 <h1 className='lmj-title'>{title}</h1>
//             </div>
            
//             <Recommendation />
//         </div>

//     )
// }

// export default Banner