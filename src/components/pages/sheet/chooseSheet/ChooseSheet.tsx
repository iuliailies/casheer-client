import DragAndDrop from '../../../common/DragDrop';
import Calendar from '../calendar/Calendar';
import './ChooseSheet.sass'

interface ChooseSheetProps {
    currentMonth: number;
    currentYear: number;
}

const ChooseSheet: React.FC<ChooseSheetProps> = ({
    currentMonth,
    currentYear
  }) => {

    const handleDateChange = (newDate: Date) => {
    }

    const handleFileDrop = (files: any) => {
    }

    const handleFileChoose = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = (event.currentTarget as HTMLInputElement).files;
        if (files) {
            handleFileDrop(files);
        }
    }

    return <div className="create-sheet-wrapper">
        <div className="section-header">
            <span className="title">No sheet found for <span className='is-blue'>{new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                }).format(new Date(currentYear, currentMonth, 1))}</span>
            </span>
            <span className="text">Create a new one</span>
        </div>
        <div className="content">
            <DragAndDrop onDrop={handleFileDrop}>
                <div className="choose-option">
                    <input
                        type="file"
                        id="fileDropRef"
                        accept=".json"
                        onChange={(event) => handleFileChoose(event)}
                    />
                    <div className="option-content">
                        <span className="text">Drop or Browse files</span>
                    </div>
                    <span className="text">Upload sheet file</span>
                </div>
            </DragAndDrop>

            <div className="choose-option">
                <Calendar currentMonth={currentMonth} currentYear={currentYear} onDateChange={handleDateChange}></Calendar>
                <span className="text">Choose from previous months</span>
            </div>
        </div>
    </div>
}

export default ChooseSheet;
