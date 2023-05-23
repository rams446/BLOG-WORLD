    import SignUpForm from '../../components/SignUpForm/SignUpForm';
    import LoginForm from '../../components/LoginForm/LoginForm'

    export default function AuthPage({ setUser }) {
    return (
        <>
        <h1>Blog-World</h1>
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser} />
        </>
    );
    }
