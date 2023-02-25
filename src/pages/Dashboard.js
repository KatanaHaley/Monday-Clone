import React from 'react'
import TicketCard from '../components/TicketCard'

function Dashboard() {
  const tickets = [
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'NFT Safety 101 Video',
      owner: 'Katana Haley',
      avatar: 'https://avatars.githubusercontent.com/u/24993022?v=4',
      status: 'done',
      priority: 5,
      progress: 40,
      description: 'Make a video showcasing how to work with NFTs safely, including how to know if one is not genuine.',
      timestamp: '2023-23-02'
    },
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'NFT Safety 101 Video',
      owner: 'Katana Haley',
      avatar: 'https://avatars.githubusercontent.com/u/24993022?v=4',
      status: 'done',
      priority: 5,
      progress: 40,
      description: 'Make a video showcasing how to work with NFTs safely, including how to know if one is not genuine.',
      timestamp: '2023-23-02'
    },
    {
      category: 'Q2 2022',
      color: 'blue',
      title: 'Build and Sell AI Model',
      owner: 'Katana Haley',
      avatar: 'https://avatars.githubusercontent.com/u/24993022?v=4',
      status: 'working on it',
      priority: 3,
      progress: 70,
      description: 'Make a video about AI',
      timestamp: '2023-23-02'
    },
    {
      category: 'Q3 2022',
      color: 'red',
      title: 'Build a trading bot',
      owner: 'Katana Haley',
      avatar: 'https://avatars.githubusercontent.com/u/24993022?v=4',
      status: 'stuck',
      priority: 2,
      progress: 15,
      description: 'Build an AI trading bot',
      timestamp: '2023-23-02'
    }
  ]


  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,281)',
    'rgb(186,255,255)'
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({category }) => category))
  ]

  console.log(uniqueCategories)

  return (
    <div className="dashboard">
        <h1>My Projects</h1>
        <div className="ticket-container">
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h3>{uniqueCategory}</h3>
            {tickets.filter(ticket => 
              ticket.category === uniqueCategory)
              .map((filteredTicket, _index) => (
                <TicketCard 
                id={_index}
                color={colors[categoryIndex] || colors[0]}
                ticket={filteredTicket}
                />
              ))
              }
          </div>
        ))}
        </div>
    </div>
  )
}

export default Dashboard