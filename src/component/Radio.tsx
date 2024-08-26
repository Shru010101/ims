import React from 'react'

const Radio: React.FC = () => {
    return (
        <div className='mb-0 mt-2' style={{display:'flex', alignItems:'center',
         justifyContent:'center', paddingTop:'1rem'}}>
            <div>
                <label className="form-check-label" style={{ marginRight: '2rem' }}>Gender:</label>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                     id="inlineRadio1" value="male" />
                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                     id="inlineRadio2" value="female" />
                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                     id="inlineRadio3" value="other" />
                    <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
                </div>
            </div>

        </div>
    )
}
export default Radio