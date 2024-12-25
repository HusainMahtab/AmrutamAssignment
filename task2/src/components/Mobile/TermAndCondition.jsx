import React from 'react'

function TermAndCondition() {
    const data=[
        {
            id:1,
            heading:"convenient online & In-clinic consultations",
            logo:"https://s3-alpha-sig.figma.com/img/f4ba/b0ae/b3be65721ad15db48b42ced1fe1add76?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ON7C5YJ1LOty4idxgQv08cdMpFyzeYWaqlHOY6n8F1e4bTs08uNMKjCHIxQnOT8zb~AdFKF-iiPjBbcaiQnaVYyjv8xX4LJ6tTk0iaK7A3cNdf8u5kMFxv4IrILyOv3dlqITyu2w2XjItlFwPdVVsBtEV2-S~JHp~LRAqIRv64cXjYo6AbNP4C2e-xJg-ahpytQauM~7xRcUMwqLjxltppiliq~zNYRe1ZEmkG4f0r~61U9B~FgOIMHJ-FokwIHl1h~wARZDi7Wo86o2eG0cHjiI~fx5KQpTv9XtV7A0jwyqF1IAxIEyZetROZlSNFXri4qWM7wumQG-zE823h6jrQ__"
        },
        {
            id:2,
            heading:"Safe and effective treatment",
            logo:"https://s3-alpha-sig.figma.com/img/2c5e/d627/8cf1f869d2e948b71cdcdb14c7c4413f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PuuOI6NS8urVJQGE0Er-Kw-aa2UPhh340ZnTDIFz6BxBL7fXN6wcfvrWeWU~9UnQXq7SDkAnc3TbeB2KiB4QSGC9-Fp4Hzh8T0ayg2ItpPcJs6haS9O2X-z~ADoEaM-LQrI2Z5gM8fB-LhMr8GkwbXf-ACJreMDziDVV4222tiiM9~b1f7~5aq0NI30G-ncqSDsjsavgtZQlOPx8JhJZ~49gtyCXpuGSf5CM0Q8FXlOMpClmgKy3ZDTWTrbnZHkPA5LFQeh0i7upUSUq4JevIIMMYSk07R5Nz7K0z0sHVdDr6x-Is6kFPJ1EgmMgQ8QjKqQ4hdh5ngyht9mxCbOjHg__"
        },
        {
            id:3,
            heading:"Experienced Ayurvedic Practitioners",
            logo:"https://s3-alpha-sig.figma.com/img/0854/69db/3d23d6085aab3b3dbe1b662f60051d85?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDwUb1czfnLap5caO2Jwl4NN1NhbD24zSzrbYPR8mpjqi4DysOtWXXhNTTvbnOCI-TCfTYMRmfopEomzph6JkxZzlM2Vj9U-NRJkL3d49BpOC7DjSQS-s-p6FC50nTS8wd5H7iGr7B9ZlQth24ikGEnLKgNQDdojvbe-H6nUUJDpnFf4yALFZFEz6ygWn8W95GexYsW~4vt0QL5Gn22kcWsybU6VN6RfPezfnY9dXpebdjoqGS7H~R8iE9o5yNvA-TGKvEIxaomHd35kKpT7RKYJXwI1vOcjc6QjgfcAfXakPQ4Q~r-~TWxMtUKVdEUSQ~DSGGnqM5vvj5GSlpMU6w__"
        },
        {
            id:4,
            heading:"personalized Treatment Plans & Guidance",

            logo:"https://s3-alpha-sig.figma.com/img/cd8d/62a9/52ed6e4cba8b811d1e2a2336dfc266d0?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KRLWOy42UL0JflRfrNDP69MjhkIsychTg3ovPnEWoJiG5YiH37cO2o4S~xTjVjCZMecpxn6ENp5SvX~7gR-8qjQPU7M1GN0q~gazdlMZDO3qVeBAUBH495AtLVAOU8kJWBLtlPOoC2jbFUifq1qt4qL7PWOamucg~3-EosRbOgwuWyoX9d-LShvgBZKPVMmadCgfXIAL3oFwzBr7xlbAjjYrZxo9cr9lReg8aH4zpm7WlYM048vttXLEiUSXnawEAIPW39D0y1PlreXvpF-9tAa4J-o7DjSbXcaOrtexvKQmPx0iqzfZPoy6WuNV~s2sWImBavv6XpogZ4YFd4ZD3w__"
        },
    ]
  return (
    <div className='lg:hidden'>
        {
            data.map((ele,index)=>(
             <div className='w-full h-[122px] flex justify-center items-center bg-[#FFF7E2] border-[1px] border-[#E9E9E9]'>
                <div key={index} className="w-[287px] h-[70px] flex justify-between items-center gap-4">
                     <div className='w-[70px] h-[70px] flex justify-center items-center rounded-full bg-white border-[1px] border-[#3A643B]'>
                       <img className="w-[40px] h-[40px]" src={ele.logo} alt="logo" />
                     </div>
                     <div className='w-[201px] h-[50px]'>
                       <p className='font-[DINPro-Bold] text-[18px] font-bold leading-[25.2px] text-[#3A643B]'>{ele.heading}</p>
                     </div>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default TermAndCondition