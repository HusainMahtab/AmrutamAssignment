import React from 'react'

function OurServicesMobile() {
    const data=[
        {
          id:1,   
          img:"https://s3-alpha-sig.figma.com/img/8567/a17c/ce30a4f9be32f98dae27064431959708?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Feg6724JvksLr1BUsqWJxE547Gr3KfN2KhXNaPtL80mwGYqUN8OfESUHVKZ5st5PqEwCQJjEc3lpeMeH9S7M89pS49lAWDCrHjUAPZGNccrPQS-oKJ8ughhKRPqb0rXlZsvKSUyj4uVM~bJREaAbeYeaVS3296~oOegd-zycA7VtcH6dQ3zLGOecKDBofcE1~7pPjRU1HJvrhZB6z5KQb-3R-WPR7niCxuxC-sp~3Gzo9zsFbHM-6gHnvHN3v~RrS~bS-cAodMzjm--Ob7ffPxKIhUqiRgDsdxhGCrL9o2zZLEMmz6WGu1ZJFHHKQ3jJDZxsUTHxtlrrTacSfqXPxg__",
          heading:"Personalized Wellness",
          paira:" treatments made just for you based on your individual doshas,(body type)" 
        },
        {
            id:2,
            img:"https://s3-alpha-sig.figma.com/img/2879/63ec/4b701523b3665b8db7fd2b6067eebff8?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UTNVHm5GIe39kS16z6zGZLxxoJUO0UX3ThS2HQeOuuoU4gJDEB07kSWg1d2J1bhtuo6We6P9VZNhjKA5hd-U8SsCYYbU8jpbakEvZ9ulCraGKtaJsPQBB8c48W7Qd17ORWenZI4VLISMI3VXPNLN~GkJl5~ka3QSD1ixQaUUgmeEg290PJBDi5kLcnZKDzfdOeifpNLAzgYjqU-H9AzCNlVe2ZWNxCJUIzZntRC6y5078060ySRWHgZJ3LTCBW2-zgL8OlMRk88jkFm63VLG6XgOV~uPcAMr1SpAyvQOgKgQgxs5JaT1oDG~0JnfmZWzdD0EjNrweKQ4gbIoEEJvnA__",
            heading:"Focus on prevention",
            paira:"Stop problems even before they start."
          },
          {
            id:3,
            img:"https://s3-alpha-sig.figma.com/img/2505/8cf0/56734e9ae68adcdb9d2f0667d457f069?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aTz~erYzYobaRRHPMk-R2J7PuiP9ey9ThFtkQqKaB8XeHZRdtxGazaQP3ZZkauHMVjVJ9md7P~j7LEGVmRip6jUHcOj9Nkn4Z0rq64fc0wn0SWLPmpzTdGx-lzA3WhuTE7g0nlJX7Ynqn5heEDKZfzd7qx0Avb~7qJVdjyYxIc35g9GGD1qTI2lHsm1VBL1Op3jigZEX0BBu2SBzrEhwEOQmpq9T5rGvVGjCUba5qf7W5SP~-36dslhuG1dotun0Ur-6FvK7LrzyOZIsZQmgy8GRzBLwxmSKF7ZPq2IYkgWc6~g1vwvyRXq~QIyJW2j0V4tmMVMJ0S3vyLmXOI479Q__",
            heading:"Mind-Body Connection",
            paira:"Keep your mind and body in sync for a happy life."
          },
          {
            id:4,
            img:"https://s3-alpha-sig.figma.com/img/4e2b/af21/22cc0c69eccc3be8038fe8ac40f9371f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaE1XqVRAjUJjUGFzWr4nvgCnjcegNdXYgjKxseIDKGC~DWReSVaY-JF5F1RaDeyB~eEqiviDtYK7JqZ2vVpfz4xr1w3IO3wEEec~LiJ1MYy~XilbaBR4VER2W0JutDwoZBXNsfOAN4zMcigVV7BdVRmqcjw0hEQa-cqUSfZwovIwv7h3Kvd2tmnHD7thOdYQ9af378fC9erXIQyhBbSaxRT6AKI3ukarrMcK4hIAvlqXRUFn8q042Tla7kExRlk-2pdyP4d1dCQNazdSYPyDHujqPf6qti1YC2RF9mHx5NXXB6Om8f9lTpFZiam9YlsgkDUge14TcsVr2zBkB-eNA__",
            heading:"Holistic Healing",
            paira:"Fix the root problem for long-lasting health."
          },
          {
            id:5,
            img:"https://s3-alpha-sig.figma.com/img/8d96/7947/07f25886ba1078a16b73185d5f869ad8?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j1qCcZ8BdQCZAEE3rGux6enboR0Prj8LAkpRBohswIEoonGhjIBQxf-Ud74PWBBWAVICbNMEbN85tb9FUZJKkz29~becvaVPzFNerljVhqHP-10jXSk7TWqkwOiqFpk6dY~2lkyaD0WfpwJnIBPk3IZLh14xamEvhDGRSjE1wcE06Avq0MJBjIvuKY9IwmEWyW0JPGzCAkdte2v8Br-KsE1fU59VjMgWZTZLYMU0V3mPUb4HXRMl53K6bps79CQ0cJVYPCDLsqXqt89QSjG0SqNek6jPvFK9LlnG1LfszZA6jldQXZC1LNF1PIEBD2tKBZsxnFios-zwWBhdRZfdLw__",
            heading:"Natural Remedies",
            paira:"Using herbs and natural therapies for healing."
          },
          {
            id:6,
            img:"https://s3-alpha-sig.figma.com/img/8cfd/d829/c4e732142f1ed180d4de142f4047a6ea?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i72zTYyrPWy45rPCLBlBqW-b9NHojNWaMSsdlswzWLA627n-NSVtFqPk4VooLbvPgpa0kNh2XDYEbwGZlphgTNn5J-~40gHvEbnJ9I~0XSMMI2UD3GCDvpmAKe4FSJ4WjU6qJEtLbGtIzmC4uZLslHMHHlV7bb2Qz9Op5E4nVrkXBmpmiFQ9u6qV0cGroNMEWTjMuLaeUOBfEIYh0FsJHSlBIe4XH2zm6Zz8vDldjcRKhkip1fEUYa840lJJZa~y~DLO0ywVGY1xdRPQ7xSV9Nli~fU06pPFPLCi3vdvtTFMPcTar3llCYCQs~qoIJTsCTSE89RZW7ENykcvL8wFqQ__",
            heading:"Boosting immunity",
            paira:"Stay strong and healthy for life, not just for today."
          },
    ]
  return (
    <div className="lg:hidden w-full my-[30px] p-2">
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((ele) => (
          <div
            className="w-[136px] h-auto flex flex-col justify-center items-center py-4 gap-4 border border-[#E4E4E4] rounded-[15px] shadow-md"
            key={ele.id}
          >
            <div className="w-[63px] h-[59px] bg-[#EDF5FA] flex justify-center items-center rounded-full">
              <img className="w-[42px] h-[42px]" src={ele.img} alt="service" />
            </div>
            <div className="text-center">
              <h1 className="text-[15px] font-bold leading-[19.32px]">{ele.heading}</h1>
            </div>
            <div className="text-center">
              <p className="text-[13px] text-[#6D6B6B] leading-[16.74px]">{ele.paira}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurServicesMobile