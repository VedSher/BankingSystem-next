import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

function Home() {
  const loggedIn = { firstName: 'Vaidik', lastName: 'Shreshth', email: 'mail@gmail.com', mask: 1234 };
  return (
      <section className="home">
        <div className="home-content">
          <header className='home-header'>
            <HeaderBox
              type="greeting"
              title="Welcome"
              user= {loggedIn?.firstName || "Guest"}
              subtext="Access and Manage Your Account and
              Transactions effiecently."
            />
            
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={125000.35}
            />

          </header>
          </div>

          RECENT TRANSACTIONS
          <RightSideBar 
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 12300.50, mask: 3110 }, { currentBalance: 50000.50, mask: 2121 }]}
          />
      </section>
  )
}

export default Home