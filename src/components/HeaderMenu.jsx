import { useNavigate } from "react-router-dom";

function HeaderMenu({ renderContent }) {
    const navigate = useNavigate();
    return (
        <section
            style={{
                height: "200",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            {renderContent && renderContent()}
        </section>
    );
}

export default HeaderMenu;
