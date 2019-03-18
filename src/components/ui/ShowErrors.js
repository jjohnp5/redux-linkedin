import PropTypes  from 'prop-types'
import { MdClose } from 'react-icons/md'
import '../../stylesheets/ShowErrors.scss'

const ShowErrors = ({ errors=[], onClearError=f=>f }) =>
    <div className="show-errors">
        {(errors.length) ?
            errors.map((message, i) =>
                <div key={i} className="error">
                    <p>{message}</p>
                    <MdClose onClick={() => onClearError(i)}/>
                </div>
            ) : null
        }
    </div>


ShowErrors.propTypes = {
    errors: PropTypes.array,
    onClearError: PropTypes.func
}

export default ShowErrors