

const Footer = () => {
    return (
        <footer className='site-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col' xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>this will be site navigation!</h5>
                    </div>
                    <div className='col text-center' xs='6' sm='3'>
                        <h5>Social</h5>
                            <a
                                className='btn btn-social-icon btn-instagram'
                                href='http://instagram.com/'
                            >
                                <i className='fa fa-instagram' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-facebook'
                                href='http://www.facebook.com/'
                            >
                                <i className='fa fa-facebook' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-twitter'
                                href='http://twitter.com/'
                            >
                                <i className='fa fa-twitter' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-google'
                                href='http://youtube.com/'
                            >
                                <i className='fa fa-youtube' />
                            </a>
                    </div>
                    <div className='col text-center'  sm='4'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> 1-206-555-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> campsites@nucamp.co
                        </a>
                        
                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer;

