function HeaderMenu({ renderContent }) {
    return <nav>{renderContent && renderContent()}</nav>;
}

export default HeaderMenu;
