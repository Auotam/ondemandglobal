import Link from 'next/link';
import React from 'react';

const PricingSection = () => {

   const pricingList = [
      {
         id: 1,
         packageIcon: '/assets/img/icon/pricing-icon-1.png',
         packageName: 'small package',
         packagePrice: '$49.00',
         packageService: 'Gardens Service',
         packagePlaning: 'Forest Planning',
         packageParty: 'Gardens Party',
         packageLandscape: 'Preparing Landscape',
         packageFence: 'Garden Fence',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30',
         packageBadge: 'd-none',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'n-inc',
         packageListClassD: 'n-inc',
         packageListClassE: 'n-inc'
      },
      {
         id: 2,
         packageIcon: '/assets/img/icon/pricing-icon-2.png',
         packageName: 'best package',
         packagePrice: '$59.00',
         packageService: 'Gardens Service',
         packagePlaning: 'Forest Planning',
         packageParty: 'Gardens Party',
         packageLandscape: 'Preparing Landscape',
         packageFence: 'Garden Fence',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30 best-package',
         packageBadge: 'bp-tag',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'no-inc',
         packageListClassD: 'n-inc',
         packageListClassE: 'n-inc'
      },
      {
         id: 3,
         packageIcon: '/assets/img/icon/pricing-icon-3.png',
         packageName: 'for office',
         packagePrice: '$69.00',
         packageService: 'Gardens Service',
         packagePlaning: 'Forest Planning',
         packageParty: 'Gardens Party',
         packageLandscape: 'Preparing Landscape',
         packageFence: 'Garden Fence',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30',
         packageBadge: 'd-none',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'no-inc',
         packageListClassD: 'no-inc',
         packageListClassE: 'n-inc'
      },
      {
         id: 4,
         packageIcon: '/assets/img/icon/pricing-icon-4.png',
         packageName: 'for house',
         packagePrice: '$99.00',
         packageService: 'Gardens Service',
         packagePlaning: 'Forest Planning',
         packageParty: 'Gardens Party',
         packageLandscape: 'Preparing Landscape',
         packageFence: 'Garden Fence',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30',
         packageBadge: 'd-none',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'no-inc',
         packageListClassD: 'no-inc',
         packageListClassE: 'no-inc'
      }
   ]
    return (
      <>
        
      <div id="statistic-1" className="py-100 statistic-section division">
      <div className="container">


         
         <div className="statistic-1-wrapper">
            <div className="row justify-content-md-center row-cols-1 row-cols-md-3">


               
               <div className="col">							
                  <div id="sb-1-1" className="wow fadeInUp">
                     <div className="statistic-block">	

                       
                        <div className="statistic-block-digit text-center">
                           <h2 className="s-46 statistic-number"><span className="count-element">89</span>k</h2>
                        </div>

                       
                        <div className="statistic-block-txt color--grey">
                           <p className="p-md">Porta justo integer and velna vitae auctor</p>
                        </div>

                     </div>
                  </div>								
               </div>	


               
               <div className="col">							
                  <div id="sb-1-2" className="wow fadeInUp">
                     <div className="statistic-block">		

                        
                        <div className="statistic-block-digit text-center">
                           <h2 className="s-46 statistic-number"><span className="count-element">76</span>%</h2>
                        </div>

                       
                        <div className="statistic-block-txt color--grey">
                           <p className="p-md">Ligula magna suscipit vitae and rutrum</p>
                        </div>

                     </div>
                  </div>								
               </div>	


               
               <div className="col">							
                  <div id="sb-1-3" className="wow fadeInUp">
                     <div className="statistic-block">		

                        
                        <div className="statistic-block-digit text-center">
                           <h2 className="s-46 statistic-number">
                              <span className="count-element">4</span>.<span className="count-element">93</span>
                           </h2>
                        </div>

                       
                        <div className="statistic-block-txt color--grey">
                           <p className="p-md">Sagittis congue augue egestas an egestas</p>
                        </div>

                     </div>
                  </div>								
               </div>	


            </div>  
         </div>	


      </div>		
   </div>	 




   
   <hr className="divider" />	
</>

    );
};

export default PricingSection;