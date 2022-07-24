
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const CounterDetails = () => {
    const [focus, setFocus] = useState(false)
    return (
        <div className='mt-5 mb-5 business'>
            <div className='row text-center'>

                <div className='col-md-4'>
                    <CountUp start={focus ? 0 : null} end={4200} duration={3}>
                        {({ countUpRef }) => (
                            <VisibilitySensor onChange={isVisible => {
                                console.log('visible',isVisible)
                                if (isVisible) {
                                    setFocus(true)
                                }
                            }}>
                                <div>
                                    <span className='fs-3' ref={countUpRef} />+
                                    <h4>Customers</h4>
                                </div>
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </div>
                <div className='col-md-4'>
                    <CountUp start={focus ? 0 : null} end={47} duration={3}>
                        {({ countUpRef }) => (
                            <VisibilitySensor onChange={isVisible => {
                                console.log('visible',isVisible)
                                if (isVisible) {
                                    setFocus(true)
                                }
                            }}>
                                <div>
                                    <span className='fs-3' ref={countUpRef} />+
                                    <h4>Shops</h4>
                                </div>
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </div>
                <div className='col-md-4'>
                    <CountUp start={focus ? 0 : null} end={140} duration={3}>
                        {({ countUpRef }) => (
                            <VisibilitySensor onChange={isVisible => {
                                console.log('visible',isVisible)
                                if (isVisible) {
                                    setFocus(true)
                                }
                            }}>
                                <div>
                                    <span className='fs-3' ref={countUpRef} />+
                                    <h4>Employs</h4>
                                </div>
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </div>


            </div>
        </div>
    );
};

export default CounterDetails;