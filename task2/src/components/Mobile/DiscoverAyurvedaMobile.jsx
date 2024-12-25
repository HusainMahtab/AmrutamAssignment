import React from 'react';

function DiscoverAyurvedaMobile() {
    const bgImage = {
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/328a/02bf/246a02b2aac7549c73dbe7dacc8e2553?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnOBbEKPSdpnfASl0TlEZ8e~gkCy-5ta7Nzg~S8~n03RA6tP1OUeuwFp2UNSw97pjpp8bMy4Slzmj9XJnPHxpHHZifhDOcN6ubbUDVzlJ8TW~zFW~Ny1-6~OMkbrbCzduyIHbjX0wZwKy5pTG110caWDQpMlwzoZG-oVEdAVmqs8MABFecNo3BSopBQQHNu-Ja~c1aRHoVIrifT5yftqv5o6Dzb9~SVdIEKCpBq6hl0yISBI-R7lTy8Xf3gd3EujEbORm0gj7fuK-lbaTudQlFRneVVzE2VC0-wogD6WIO8EyVOZDsPFxPYnNwIhZsjGXL5qPgthfbhRQEZ4fj1GhQ__')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: "300px",
        height: "320px",
    };

    return (
        <div className="w-full h-auto lg:hidden mt-12">
            <div className="w-full h-[176px] flex justify-center items-center">
                <div className="px-4 flex flex-col gap-4">
                    <div className="w-full text-center">
                        <h1 className="w-full font-[DINPro-Bold] font-bold text-[32px] leading-[36px] text-[#3A643B]">
                            Discover Ayurveda’s magic with us
                        </h1>
                    </div>
                    <div className="w-full text-center">
                        <p className="font-[DINPro] text-[14px] leading-[21px] text-[#666666]">
                            Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, a totally effective approach for a better life.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full my-8 flex justify-center items-center">
                <div style={bgImage} className="relative flex justify-center items-center">
                    <div className="w-[290px] h-[300px] rounded-full overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="https://s3-alpha-sig.figma.com/img/940c/90b2/b036ab89705f9413d552418bf0f9fa8f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i67QCHDYREiNhjbc4Ccq2s9WufJdgxjdUGa4gGhtzuKg8RaA0iCTXHDuVskpRPRLlARvH6WKFsP7NwEzY9~ckDK~XEQJnTVv8g86-RaDb5eTelYbCrQmB5Oa8YmA2X~qDJdHig9oRxKj-MOKRCkx0OuTyj2opj1nmdgnrLb0~8scygdwgNNbhAc0oR6OZD7xwBHI5guqweZcnHk5oFYd1O89pRmfg0IMuRiAPTWd~tTRS0b8WlOe8mDJnS4RMmcmWsUovlKrY0MgQCCTmGtcMwwyizNrE-qlAmyQJ20R32APIH1XR8S~KuVBCPwKjMrZzllneFaT7BiH44d7TJBnUA__"
                            alt="image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiscoverAyurvedaMobile;
