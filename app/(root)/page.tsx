import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
      <section className="home">
        <div className="home-content">
          <header className='home-header'>
            <HeaderBox
              type="greeting"
              title="Welcome"
              user= {loggedIn?.name || "Guest"}
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
            banks={[{ currentBalance: 12300.50 }, { currentBalance: 50000.50, mask: 2121 }]}
          />
      </section>
  )
}

export default Home