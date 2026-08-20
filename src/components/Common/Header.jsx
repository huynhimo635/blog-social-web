import { SearchBar, CreatePostButton } from './';
import Link from "next/link";


const Header = () => {

    const classes = {
            navparent:
                'container min-w-full h-auto p-7 bg-white fixed top-0 left-0 right-0 z-10',
            nav: 'container  mx-auto fixed top-0 left-0 right-0 z-10',
            flexItems: 'flex items-center justify-between bg-white',
            notifications: 'rounded-lg cursor-pointer hover:bg-gray-200 p-2 ml-4 ',
            avatar: 'w-10 h-10 mx-4 rounded-full cursor-pointer',
        }

    return (
        <Header className={classes.navparent}>
            <nav className={classes.nav}>
                <div className={classes.flexItems}>
                    <div className="flex items-center">
                        <a href="/" class="site-logo" aria-label="DEV">
                            <img
                                className="w-14 h-14 ml-4"
                                src="https://www.vectorlogo.zone/logos/devto/devto-icon.svg"
                                alt="dev-logo"
                            ></img>
                        </a>
                        <SearchBar />
                    </div>
                    <div className="flex items-center">
                        <Link href={"/create"}>
                            <CreatePostButton />
                        </Link>
                        <div className={classes.notifications}>
                            <img
                                className="w-7 h-7"
                                src="https://www.svgrepo.com/show/31480/notification-bell.svg"
                                alt="bell-icon"
                            ></img>
                        </div>
                        <div>
                            <img
                                className={classes.avatar}
                                src="https://i.pravatar.cc/300"
                                alt="avatar"
                            ></img>
                        </div>
                    </div>
                </div>
            </nav>
        </Header>
    );
};


export default Header;