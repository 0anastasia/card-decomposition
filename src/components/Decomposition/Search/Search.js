/**
 * поиск по фразе
 * @returns {JSX.Element}
 * @constructor
 */
import SearchMenu from './SearchMenu';

export default function Search() {
	return (
		<div className={'search'}>
			<SearchMenu />

			<form className={'search__form'}>
				<input className={'search__input'}/>
				<button className={'search__btn'}>Найти</button>
			</form>
			<div className={'search__help'}>Найдётся всё. Например, фаза луны сегодня.</div>
		</div>
	)
}
