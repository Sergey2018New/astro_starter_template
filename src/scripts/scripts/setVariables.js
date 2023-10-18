export default function setVariables() {
    /**
     * Set variable 1/100 screen height
    */
    const setScreenHeightProperty = () => {
        document.documentElement.style.setProperty('--vh', `${(window.innerHeight * 0.01).toFixed(2)}px`);
    };

    setScreenHeightProperty();

    window.addEventListener('resize', () => {
        setScreenHeightProperty();
    });
}
