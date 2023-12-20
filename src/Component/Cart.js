import React from 'react'
const Cart = (props) => {
    return (
        <div className='w-[692px] h-[472px] shadow-xl border-[1px] border-[#E0E0E0] mt-[30px]'>
            <div>
                <img src={props.image} className='h-[220px] w-[692px]' />
            </div>
            <div className='ml-5'>
                <div className='mt-[20px] font-[500] text-[18px] font-[IBM Plex Sans] '>{props.title}</div>
                <div className='flex items-center'>
                    <div className='w-[600px] mt-[20px] font-[600] text-[22px] text-[#000000]'>{props.header}</div>
                    <div>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.6668 14.0001C18.6668 15.2834 19.7168 16.3334 21.0002 16.3334C22.2835 16.3334 23.3335 15.2834 23.3335 14.0001C23.3335 12.7167 22.2835 11.6667 21.0002 11.6667C19.7168 11.6667 18.6668 12.7167 18.6668 14.0001ZM16.3335 14.0001C16.3335 12.7167 15.2835 11.6667 14.0002 11.6667C12.7168 11.6667 11.6668 12.7167 11.6668 14.0001C11.6668 15.2834 12.7168 16.3334 14.0002 16.3334C15.2835 16.3334 16.3335 15.2834 16.3335 14.0001ZM9.3335 14.0001C9.3335 12.7167 8.2835 11.6667 7.00016 11.6667C5.71683 11.6667 4.66683 12.7167 4.66683 14.0001C4.66683 15.2834 5.71683 16.3334 7.00016 16.3334C8.2835 16.3334 9.3335 15.2834 9.3335 14.0001Z" fill="black" />
                        </svg>

                    </div>
                </div>
                <div className='mt-[10px] font-[IBM Plex Sans] font-[400] text-[19px] text-[#5C5C5C]'>
                    <p>
                        {props.paragraph}                </p>
                </div>
                <div className='mt-[24px] flex justify-between items-center'>
                    <div className='flex gap-1 items-center'>
                        <div className='w-[48px] h-[48px] rounded-[24px]'><img src={props.profileimage} /></div>
                        <p className='font-[IBM Plex Sans] font-[600] text-[18px] text-[#000000]'>{props.username}</p>
                    </div>
                    <div className='flex items-center mr-12'>
                        <div className='flex items-center gap-1 mr-6'>
                            <div className='w-[16px] h-[16px] mt-1 '><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 6C2.0475 2.7075 5.25 0.375 9 0.375C12.75 0.375 15.9525 2.7075 17.25 6C15.9525 9.2925 12.75 11.625 9 11.625C5.25 11.625 2.0475 9.2925 0.75 6ZM15.615 6C14.3775 3.4725 11.8425 1.875 9 1.875C6.1575 1.875 3.6225 3.4725 2.385 6C3.6225 8.5275 6.1575 10.125 9 10.125C11.8425 10.125 14.3775 8.5275 15.615 6ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM5.625 6C5.625 4.14 7.14 2.625 9 2.625C10.86 2.625 12.375 4.14 12.375 6C12.375 7.86 10.86 9.375 9 9.375C7.14 9.375 5.625 7.86 5.625 6Z" fill="#525252" />
                            </svg>
                            </div>
                            <div className='font-[IBM Plex Sans] font-[500] text-[14px] text-[#525252]'>1.4k views</div>
                        </div>
                        <div className='w-[42px] h-[36px] rounded-[2px] bg-[#EDEEF0] flex justify-center items-center'>
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#2D2D2D"/>
</svg>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart