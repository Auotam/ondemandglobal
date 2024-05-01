import React from 'react';

const WorkSection = () => {

    const workItems = [
        {
            id: 1,
            workImg : '/assets/img/icon/work-icon1.png',
            workTitle : 'Garden Design',
            workDesc : 'Whether you are looking for plants, trees, shrubs or garden',
            workClass : 'process-flow-border',
        },
        {
            id: 2,
            workImg : '/assets/img/icon/work-icon2.png',
            workTitle : 'soil filtering',
            workDesc : 'Whether you are looking for plants, trees, shrubs or garden',
            workClass : 'process-flow-border',
        },
        {
            id: 3,
            workImg : '/assets/img/icon/work-icon3.png',
            workTitle : 'ready to plant',
            workDesc : 'Whether you are looking for plants, trees, shrubs or garden',
            workClass : 'process-flow-border',
        },
        {
            id: 4,
            workImg : '/assets/img/icon/work-icon4.png',
            workTitle : 'using soil medic',
            workDesc : 'Whether you are looking for plants, trees, shrubs or garden',
            workClass : 'process-flow-border d-none',
        }
    ]
    return (
      <section class="pt-100 ct-01 content-section division">
    <div class="container">
        <div class="row d-flex align-items-center">
            <div class="col-md-6 order-last order-md-2">
                <div class="txt-block left-column wow fadeInRight">
                    <div class="txt-box">
                        <h5 class="s-24 w-700">Solution that grows with you</h5>
                        <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit</p>
                    </div>
                    <div class="txt-box mb-0">
                        <h5 class="s-24 w-700">Connect your data sources</h5>
                        <p>Tempor sapien sodales quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus an ipsum vitae suscipit purus</p>
                        <ul class="simple-list">
                            <li class="list-item">
                                <p>Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue dolor cursus</p>
                            </li>
                            <li class="list-item">
                                <p class="mb-0">Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue magna placerat</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6 order-first order-md-2">
                <div class="img-block right-column wow fadeInLeft">
                    <img class="img-fluid" src="/assets/images/img-06.png" alt="content-image" />
                </div>  
            </div>
        </div>
    </div>
</section>

   );
};

export default WorkSection;