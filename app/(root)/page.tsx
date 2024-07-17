import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Santiago'}
  return (
    <div className="home">
      <div className='home-content'>
        <header className='home-header'>

          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>
        <TotalBalanceBox 
        accounts = {[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}

/>
      </div>
    </div>
  )
}

export default Home