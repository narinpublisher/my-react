export default function App () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element= { <La /> }>
				   <Route index element= { <Hom /> } />
				   <Route path='branch'	element= { <Br /> } />
				   <Route path='hope' element= { <Ho /> } />
				   <Route path='eng' element= { <En /> } />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);