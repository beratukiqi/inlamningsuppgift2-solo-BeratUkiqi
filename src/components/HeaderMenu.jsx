function HeaderMenu({ renderContent }) {
    return (
        <nav
            style={{
                height: "200",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            {renderContent && renderContent()}
        </nav>
    );
}

export default HeaderMenu;
