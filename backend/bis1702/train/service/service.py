from django.shortcuts import get_object_or_404

from .PreProcessing.AnnaModel.annasmodel import AnnaModel
from .PreProcessing.AnnaModel.predict import AnnaModelPredict

from ..models import Parameters

import os, zipfile, shutil

from random import choice
from string import ascii_letters


class Processing(object):
    def __init__(self, parameters):
        self.parameters = parameters

    def main(self):
    

        # For Linux
        path = os.path.abspath(__file__)
        path = path.split('/')[1:-3]
        p = '/'
        for i in range(len(path)):
            p += path[i] + '/'
        path = p[:-1]

        hhh = str(self.parameters['hash_name']).split('.')[0]

        path_hash = str(path) + '/data/dataset/Process/' + str(self.parameters['hash_name'])
        path_res = str(path) + '/data/dataset/Rezult/' + str(self.parameters['hash_name'])
        path_model = str(path) + '/data/dataset/Models/' + str(self.parameters['hash_name']).split('.')[0] + '.h5'
        
        # if self.parameters['only_zip'] == 'y':
        #     os.mkdir(str(path) + '/data/dataset/Process/' + hhh)
        #     shutil.move(path + self.parameters['z_file'], path + '/data/dataset/Process/' + hhh)
        #     path_z_file = path + '/data/dataset/Process/' + hhh + '/' + self.parameters['z_file'].split('/')[-1]
        #     zipFile = zipfile.ZipFile(path_z_file, 'r')
        #     zipFile.extractall('data/dataset/Process/' + hhh)
        #     path_x_train = path + '/data/dataset/Process/' + hhh + '/' + 'data.csv'
        #     path_y_train = path + '/data/dataset/Process/' + hhh + '/' + 'labels.csv'

        # else:
        #     path_x_train = path + self.parameters['x_train']
        #     path_y_train = path + self.parameters['y_train']


        '''
        # For Windows
        path = os.path.abspath(__file__)
        path = path.split('\\')[:-3]
        p = ''
        for i in range(len(path)):
            p += path[i] + '\\'
        path = p[:-1]
        path_hash = str(path) + '\\data\\dataset\\Process\\' + str(self.parameters['hash_name'])
        path_res = str(path) + '\\data\\dataset\\Rezult\\' + str(self.parameters['hash_name'])
        path_model = str(path) + '\\data\\dataset\\Models\\' + str(self.parameters['hash_name']).split('.')[0] + '.h5'
        # End Windows
        '''

        param = get_object_or_404(Parameters, pk=self.parameters['id'])

        if param.train_active == True:

            if self.parameters['only_zip'] == 'y':
                os.mkdir(str(path) + '/data/dataset/Process/' + hhh)
                shutil.move(path + self.parameters['z_file'], path + '/data/dataset/Process/' + hhh)
                path_z_file = path + '/data/dataset/Process/' + hhh + '/' + self.parameters['z_file'].split('/')[-1]
                zipFile = zipfile.ZipFile(path_z_file, 'r')
                zipFile.extractall('data/dataset/Process/' + hhh)
                path_x_train = path + '/data/dataset/Process/' + hhh + '/' + 'data.csv'
                path_y_train = path + '/data/dataset/Process/' + hhh + '/' + 'labels.csv'

            else:
                os.mkdir(str(path) + '/data/dataset/Process/' + hhh)
                path_x_train = path + self.parameters['x_train']
                path_y_train = path + self.parameters['y_train']


            param.train_active = False
            param.save()
            f = open(path_hash, 'w')
            f.write('0.1')
            f.close()
            out = AnnaModel(
                path_x_train,
                path_y_train,
                self.parameters['predict'],
                self.parameters['repeats'],
                self.parameters['epochs'],
                self.parameters['read'],
                self.parameters['folds'],
                self.parameters['train'],
                path_hash,
                path_res,
                path_model,
                self.parameters['only_train']
                ).main()
            
            os.mkdir(path + '/data/dataset/Process/' + hhh + '/Result')

            shutil.copy(path_model, path + '/data/dataset/Process/' + hhh + '/Result')
            
            try:
                shutil.move(path + '/data/dataset/Process/' + hhh + '/labels_names.txt', path + '/data/dataset/Process/' + hhh + '/Result')
            except:
                pass

            zip_name = path + '/data/dataset/Process/' + hhh + '/nnmodel_' + hhh
            directory_name = path + '/data/dataset/Process/' + hhh + '/Result'
            shutil.make_archive(zip_name, 'zip', directory_name)

            


class OneHotCode(object):
    def __init__(self, parameters):
        self.hash = str(''.join(choice(ascii_letters) for i in range(18)))
        self.file = parameters['zipfile1']
        self.number = parameters['number']


    def main(self):


        # For Linux
        path = os.path.abspath(__file__)
        path = path.split('/')[1:-3]
        p = '/'
        for i in range(len(path)):
            p += path[i] + '/'
        path = p[:-1]
        # End Linux

        '''
        # For Windows
        path = os.path.abspath(__file__)
        path = path.split('\\')[:-3]
        p = ''
        for i in range(len(path)):
            p += path[i] + '\\'
        path = p[:-1]
        # End Windows
        '''

        '''
        # For Windows
        zipFile = zipfile.ZipFile(path + '\\' + self.file, 'r') # Открытие архива с исходными кодами
        zipFile.extractall('data\\unpack\\' + self.hash)  # Распаковка архива

        shutil.copy(r'data\\make_data_set.exe', 'data\\unpack\\' + self.hash)  # Копирование файла, который создает датасеты

        os.system(path + '\\data\\unpack\\' + self.hash + '\\make_data_set.exe -l 5000 -f '+ str(self.number+2) +' -t 0.0')  # Создание датасета

        # Перенос файлов
        dit_path = path + '\\data\\unpack\\' + self.hash + '\\dataset'
        os.mkdir(dit_path)
        try:
            shutil.move(path + '\\data.csv', path + '\\data\\unpack\\' + self.hash + '\\dataset')
        except:
            pass
        try:
            shutil.move(path + '\\labels.csv', path + '\\data\\unpack\\' + self.hash + '\\dataset')
        except:
            pass
        try:
            shutil.move(path + '\\test.csv', path + '\\data\\unpack\\' + self.hash + '\\dataset')
        except:
            pass
        try:
            shutil.move(path + '\\testlabels.csv', path + '\\data\\unpack\\' + self.hash + '\\dataset')
        except:
            pass
        try:
            shutil.move(path + '\\labels_names.txt', path + '\\data\\unpack\\' + self.hash + '\\dataset')
        except:
            pass
        '''

        # For Linux
        zipFile = zipfile.ZipFile(path + '/' + self.file, 'r') # Открытие архива с исходными кодами
        zipFile.extractall('data/unpack/' + self.hash)  # Распаковка архива

        shutil.copy(r'data/make_data_set.exe', 'data/unpack/' + self.hash)  # Копирование файла, который создает датасеты

        os.system("cd '{0}'/data/unpack/'{1}'/ && wine make_data_set.exe -l 5000 -f '{2}' -t 0.5".format(path, self.hash, str(self.number+2)))  # Создание датасета

        # Перенос файлов
        dit_path = path + '/data/unpack/' + self.hash + '/dataset'
        os.mkdir(dit_path)
        try:
            shutil.move(path + '/data/unpack/' + self.hash + '/data.csv', path + '/data/unpack/' + self.hash + '/dataset')
        except:
            pass
        try:
            shutil.move(path + '/data/unpack/' + self.hash + '/labels.csv', path + '/data/unpack/' + self.hash + '/dataset')
        except:
            pass
        try:
            os.remove(path + '/data/unpack/' + self.hash + '/test.csv')
        except:
            pass
        try:
            os.remove(path + '/data/unpack/' + self.hash + '/testlabels.csv')
        except:
            pass
        try:
            shutil.move(path + '/data/unpack/' + self.hash + '/labels_names.txt', path + '/data/unpack/' + self.hash + '/dataset')
        except:
            pass
        
        zip_name = path + '/data/unpack/' + self.hash + '/dataset'
        directory_name = path + '/data/unpack/' + self.hash + '/dataset'
        shutil.make_archive(zip_name, 'zip', directory_name)

        return ['http://127.0.0.1:8000/data/unpack/' + self.hash + '/dataset.zip',
                ]

class PredictService(object):
    def __init__(self, parameters):
        self.model_id = parameters['hash_model']+'.h5'
        self.validate = parameters['validata']
        self.user_model = parameters['user_model']
        self.check_id = parameters['hash_model']
        self.only_zip = parameters['only_zip']
        self.zip_file = parameters['zip_file']

    def main(self):
        # For Windows
        #path = os.path.abspath(__file__)
        #path = path.split('\\')[:-3]
        #p = ''
        #for i in range(len(path)):
        #    p += path[i] + '\\'
        #path = p[:-1]
        # End Windows
        
        # For Linux
        path = os.path.abspath(__file__)
        path = path.split('/')[1:-3]
        p = '/'
        for i in range(len(path)):
            p += path[i] + '/'
        path = p[:-1]
        # End Linux

        path_model = str(path) + '/data/dataset/Models/' + str(self.model_id)
        path_zipp = str(path) + str(self.zip_file)
        path_validate = str(path) + self.validate
        self.user_model = str(path) + self.user_model

        out = AnnaModelPredict(path_model, path_validate, self.user_model, self.check_id, path, self.only_zip, path_zipp).main()

        return out



