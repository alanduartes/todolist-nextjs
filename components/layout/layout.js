const Layout = (props) => (
    <main className="mainwrap container">
        { props.children }
        <style global jsx>
        {`
            .task-done {
                text-decoration: line-through;
            }
        `}
        </style>
    </main>
)

export default Layout