import React from 'react';
import './Main.scss'


const Main = () => {
    return (
        <div className={'main'}>
            <div className={'h2'}>
                <h2>Blogs</h2>
            </div>
            <div className={'search'}>
                <input/>
                <select>
                    <option value="value1">Значение 1</option>
                    <option value="value2" selected>Значение 2</option>
                    <option value="value3">Значение 3</option>
                </select>
            </div>
            <div className={'blogs'}>

                <div className={'blog'}>
                    <div className={'blog-logo'}>
                       {/* <img alt={'logo'}/>*/}
                    </div>
                    <div className={'content-blog'}>
                        <h3>The best blog in your village</h3>
                        <p className={'grey'}>Website: <a href={'#'}>https://www.youtube.com/</a></p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias atque, consectetur
                            consequuntur earum esse laborum laudantium magni, minima, molestiae mollitia nemo nisi
                            numquam obcaecati recusandae rem rerum sed vel?
                        </p>
                    </div>
                </div>
                <div className={'blog'}>
                    <div className={'blog-logo'}>
                        {/* <img alt={'logo'}/>*/}
                    </div>
                    <div className={'content-blog'}>
                        <h3>The best blog in your village</h3>
                        <p className={'grey'}>Website: <a href={'#'}>https://www.youtube.com/</a></p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias atque, consectetur
                            consequuntur earum esse laborum laudantium magni, minima, molestiae mollitia nemo nisi
                            numquam obcaecati recusandae rem rerum sed vel?
                        </p>
                    </div>
                </div>

                <div className={'blog'}>
                    <div className={'blog-logo'}>
                        {/* <img alt={'logo'}/>*/}
                    </div>
                    <div className={'content-blog'}>
                        <h3>The best blog in your village</h3>
                        <p className={'grey'}>Website: <a href={'#'}>https://www.youtube.com/</a></p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias atque, consectetur
                            consequuntur earum esse laborum laudantium magni, minima, molestiae mollitia nemo nisi
                            numquam obcaecati recusandae rem rerum sed vel?
                        </p>
                    </div>
                </div>
            </div>

            <div className={'button'}>
                <button>Show more</button>
            </div>
        </div>
    );
};

export default Main;