
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";
import { Upload, X, Play, Pause, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioUploadProps {
  onUpload?: (file: File) => void;
  language?: "en" | "other";
  className?: string;
}

export function AudioUpload({ onUpload, language = "en", className }: AudioUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith("audio/")) {
        toast({
          title: "Invalid file type",
          description: "Please upload an audio file",
          variant: "destructive",
        });
        return;
      }
      
      setFile(selectedFile);
      if (audioRef.current) {
        audioRef.current.src = URL.createObjectURL(selectedFile);
      }
      setUploadComplete(false);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    
    setIsUploading(true);
    
    // Simulate upload progress
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 5;
      setProgress(progressValue);
      
      if (progressValue >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setUploadComplete(true);
        if (onUpload) {
          onUpload(file);
        }
        toast({
          title: "Upload complete",
          description: `${file.name} has been uploaded successfully.`,
        });
      }
    }, 150);
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRemove = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setIsUploading(false);
    setProgress(0);
    setUploadComplete(false);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} className="hidden" />
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="hidden"
        id={`audio-upload-${language}`}
      />
      
      {!file ? (
        <div 
          className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-coach-500 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
          <p className="text-lg font-medium">Upload audio recording</p>
          <p className="text-sm text-muted-foreground mt-1">
            MP3, WAV, or M4A up to 30MB
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            {language === "en" ? "English" : "Secondary Language"} recording
          </p>
        </div>
      ) : (
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium truncate">
              {file.name}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRemove}
              disabled={isUploading}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
            <span>•</span>
            <span>{language === "en" ? "English" : "Secondary Language"}</span>
          </div>
          
          {isUploading ? (
            <div className="mt-4 space-y-2">
              <Progress value={progress} className="h-2" />
              <div className="text-xs text-right text-muted-foreground">
                {progress}%
              </div>
            </div>
          ) : (
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <>
                    <Pause className="mr-1 h-4 w-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-1 h-4 w-4" />
                    Play
                  </>
                )}
              </Button>
              
              {uploadComplete ? (
                <Button
                  size="sm" 
                  variant="outline"
                  className="text-green-600 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                  disabled
                >
                  <Check className="mr-1 h-4 w-4" />
                  Uploaded
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={handleUpload}
                >
                  <Upload className="mr-1 h-4 w-4" />
                  Upload
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
