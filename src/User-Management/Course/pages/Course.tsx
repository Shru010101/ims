import React from 'react'
// import Logo from '../../../img/Logo.png'
import Cards from '../../../layout/Cards'
import Logo from '../../../img/download.png'

const Course:React.FC = () => {
  return (
    <div>
         <Cards cards={[
                { image: Logo, title: 'HTML', fees: 5000, duration: '10 Days', btn: 'buy Now' },
                { image: Logo, title: 'CSS', fees: 5000, duration: '10 Days', btn: 'buy Now' },
                { image: Logo, title: 'JAVA', fees: 5000, duration: '10 Days', btn: 'buy Now' },
                { image: Logo, title: 'JS', fees: 5000, duration: '10 Days', btn: 'buy Now' },
                { image: Logo, title: 'REACT', fees: 5000, duration: '10 Days', btn: 'buy Now' },
                { image: Logo, title: 'REACT', fees: 5000, duration: '10 Days', btn: 'buy Now' },
                { image: Logo, title: 'REACT', fees: 5000, duration: '10 Days', btn: 'buy Now' },
                { image: Logo, title: 'REACT', fees: 5000, duration: '10 Days', btn: 'buy Now' }

            ]} />
    </div>
  )
}

export default Course