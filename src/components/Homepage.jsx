import React, { useState } from 'react'
import CartBox from './CartBox'

const Homepage = () => {

  const [purchase, setPruchase] = useState(0)

  return (
    <div className='p-10 flex flex-wrap gap-10 '>
      <CartBox 
      url="https://cdn-icons-png.freepik.com/256/2496/2496110.png?semt=ais_hybrid" price={44}
      />
      <CartBox 
      url="https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png" price={420}
      />
      <CartBox 
      url="https://raw.githubusercontent.com/Abdurrahman-Subh/mdx-blog/main/images/openai-logo.jpg" price={69}
      />
      <CartBox 
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4lLm_bNBnYx48yHb1X_DZXvFYmuqzox0xWw&s" price={4.20}
      />
      <CartBox 
      url="https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2018/03/1200px-Wikipedia-logo-v2-es.svg_.png" price={1}
      />
      <CartBox 
      url="https://play-lh.googleusercontent.com/375NW5yL8owK_hW9igW9sh-YJbda9ZcygpDXuVvK_R7l-yJp-fuhb4qvUw_FE4XW4ms" price={0.1}
      />
      <CartBox 
      url="https://images.seeklogo.com/logo-png/4/2/disney-logo-png_seeklogo-41972.png" price={100}
      />
      <CartBox 
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jOuKr9gO_iQu2kzzfH1qKy3EGcFqL0Uu4g&s" price={69.42}
      />
    </div>
  )
}

export default Homepage
