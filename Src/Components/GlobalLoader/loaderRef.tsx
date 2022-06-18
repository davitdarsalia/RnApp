import { GlobalRefs } from '../../Generics/global.Types'
import GlobalLoader from './GlobalLoader'

const references: GlobalRefs = {
	loader: null,
	navigator: null
}

export const LoaderRef = (ref: GlobalLoader) => {
	references.loader = ref
}

export const startLoading = () => {
	references.loader?.show()
}

export const interruptLoading = () => {
	references.loader?.hide()
}

export const useContainer = () => {
	const loader = () => {
		startLoading()
	}

	return {
		loader
	}
}

export default references
